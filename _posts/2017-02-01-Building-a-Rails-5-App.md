---
layout: post
title: Building a Rails 5 App
category: blog
tags:
  - ruby
  - rails
modified: 2017-03-13T00:00:00-07:00
comments: true
---

We're going to put together a basic web application using Rails, describing the app in terms of Features and of [User Stories](http://www.agilemodeling.com/artifacts/userStory.htm).

#### User Stories

`Users` can sign up, login, view their profile page and logout.

`Users` can view a list of `Pets` and the `Toys` that belong to each `Pet`.

`Pets` can be edited.

`Users` can see a `Pet`'s information.

`Users` can click on a link to show a `Pet`'s `Toys` via AJAX.

#### Features

* User authentication system
* Nested routes
* Error handling
* AJAX
* Active Record
* Seed files
* Helpers
* Testing

# Setup

### Create [rails](https://rubyonrails.org/) project

    $ rails new pet_project && cd pet_project

### Add/update required [gems](http://bundler.io/gemfile.html)

#### `Gemfile`
``` ruby
gem 'hirb'
gem 'faker'
gem 'bcrypt'
gem 'rspec-rails'
```

### Bundle, create database

    $ bundle && rails db:create

# Models

### Generate models

    $ rails generate model Pet name:string breed:string age:integer cute:boolean --no-test-framework
    $ rails generate model Toy description:text pet:references --no-test-framework
    $ rails generate model User name:string email:string:uniq password_digest:string --no-test-framework

> `null` and `default` cannot be specified from the command line, add them to the migrations as necessary. [documentation](http://guides.rubyonrails.org/active_record_migrations.html#column-modifiers)

### Edit migrations

#### `db/migrate/[timestamp]_create_pets.rb`
``` ruby
class CreatePets < ActiveRecord::Migration[5.0]
  def change
    create_table :pets do |t|
      t.string :name, null: false
      t.string :breed, null: false
      t.integer :age, null: false
      t.boolean :cute, null: false

      t.timestamps
    end
  end
end
```

#### `db/migrate/[timestamp]_create_toys.rb`
``` ruby
class CreateToys < ActiveRecord::Migration[5.0]
  def change
    create_table :toys do |t|
      t.text :description, null: false
      t.references :pet, foreign_key: true

      t.timestamps
    end
  end
end
```

#### `db/migrate/[timestamp]_create_users.rb`
``` ruby
class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :password_digest, null: false

      t.timestamps
    end
    add_index :users, :email, unique: true
  end
end
```

### Migrate, Seed database

    $ rails db:migrate && rails db:seed

## Active Record associations

#### `app/models/pet.rb`
``` ruby
class Pet < ApplicationRecord
  has_many :toys, inverse_of: :pet

  validates_presence_of :name, :breed, :age
  validates_inclusion_of :cute, :in => [true, false], message: "must be true or false"
  validates_numericality_of :age
end
```

#### `app/models/toy.rb`
``` ruby
class Toy < ApplicationRecord
  belongs_to :pet, inverse_of: :toys

  validates_presence_of :description
end
```

#### `app/models/user.rb`
``` ruby
class User < ApplicationRecord
  has_secure_password
  before_save { self.email = email.downcase }
  validates :name, presence: true, length: { maximum: 50 }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }
  validates :password, presence: true, length: { minimum: 6 }
end
```

### Rollback models (if necessary)

    $ rails destroy model Pet --no-test-framework
    $ rails destroy model Toy --no-test-framework
    $ rails destroy model User --no-test-framework

# Routing

#### `config/routes.rb`
``` ruby
Rails.application.routes.draw do
  resources :sessions, only: [:new, :create, :destroy]
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

  resources :users, only: [:new, :create, :show]
  get '/profile' => 'users#show'
  get '/signup' => 'users#new'

  resources :pets, only: [:index, :edit, :update, :show]  do
    resources :toys, only: [:index]
  end

  root 'pets#index'
  get '/home' => "pets#index"
end
```

# Helpers

#### `app/helpers/users_helper.rb`
``` ruby
module UsersHelper
  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def authorize
    redirect_to login_path unless current_user
  end
end
```

# Controllers

### Generate controllers

    $ rails generate controller Pets index show edit update --no-controller-specs --no-view-specs --no-helper --no-assets
    $ rails generate controller Toys index --no-controller-specs --no-view-specs --no-helper --no-assets
    $ rails generate controller Sessions new create destroy --no-controller-specs --no-view-specs --no-helper --no-assets
    $ rails generate controller Users new create --no-controller-specs --no-view-specs --no-helper --no-assets

#### `app/controllers/application_controller.rb`
``` ruby
class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  include UsersHelper
end
```

#### `app/controllers/pets_controller.rb`
``` ruby
class PetsController < ApplicationController
  def index
    @pets = Pet.all
  end

  def show
    @pet = Pet.find_by(id: params[:id])
    @toy = Toy.new(pet: @pet)
  end

  def edit
    @pet = Pet.find_by(id: params[:id])
  end

  def update
    @pet = Pet.find_by(id: params[:id])
    if @pet.update_attributes(pet_params)
      redirect_to pet_path
    else
      render 'edit'
    end
  end

private
  def pet_params
    params.require(:pet).permit(:name, :breed, :age, :cute)
  end
end
```

#### `app/controllers/toys_controller.rb`
``` ruby
class ToysController < ApplicationController
  def index
    @pet = Pet.find_by(id: params[:pet_id])
    @toys = @pet.toys

    respond_to do |format|
      format.html { render :index }
      format.js {}
    end
  end

private
  def toy_params
    params.require(:toy).permit(:description)
  end
end
```

#### `app/controllers/sessions_controller.rb`
``` ruby
class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.find_by_email(params[:email])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      redirect_to root_path
    else
      render 'new'
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end

end
```

#### `app/controllers/users_controller.rb`
``` ruby
class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to root_path
    else
      render 'new'
    end
  end

private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
```

### Rollback controllers (if necessary)

    $ rails destroy controller Pet
    $ rails destroy controller Toy
    $ rails destroy controller Session
    $ rails destroy controller User

# Views

### Layouts

#### `app/views/layouts/application.html.erb`
``` erb
<!DOCTYPE html>
<html>
  <head>
    <title>Dog & Pony Show</title>
    <%= csrf_meta_tags %>

    <%= stylesheet_link_tag    'application', media: 'all', 'data-turbolinks-track': 'reload' %>
    <%= javascript_include_tag 'application', 'data-turbolinks-track': 'reload' %>
  </head>

  <body>
    <% if current_user %>
      <%= link_to "#{current_user.name}", profile_path, class: "item" %>
      <%= link_to "Logout", logout_path,  class: "item" %>
    <% else %>
      <%= link_to 'Login', login_path, class: "item" %>
      <%= link_to 'Signup', signup_path, class: "item" %>
    <% end %>
    <%= yield %>
  </body>
</html>
```

### Pets

#### `app/views/pets/_pet.html.erb`
``` erb
<li><%= link_to pet.name, pet_path(pet) %></li>
```

#### `app/views/pets/edit.html.erb`
``` erb
<h1>Edit <%= @pet.name %></h1>
  <%= form_for([@pet]) do |f| %>

    <% if @pet.errors.any? %>
      <h2><%= pluralize(@pet.errors.count, "error") %> prohibited this post from being saved:</h2>
      <ul>
        <% @pet.errors.full_messages.each do |msg| %>
          <li><%= msg %></li>
        <% end %>
      </ul>
    <% end %>

    Name: <%= f.text_field :name%> <br>

    Cute? <%= f.text_field :cute, placeholder: "cute?" %><br>
    Age: <%= f.text_field :age, placeholder: "age" %><br>
    Breed: <%= f.text_field :breed, placeholder:"breed" %><br>
    <%= f.submit "Submit pet" %>
<% end %>
```

#### `app/views/pets/index.html.erb`
``` erb
<h1>Pets</h1>

<ul>
<%= render partial: "pet", collection: @pets %>
</ul>
```

#### `app/views/pets/show.html.erb`
``` erb
<h1><%= @pet.name %></h1>

<ul>
  <li>Breed: <%=@pet.breed %></li>
  <li>Age:  <%=@pet.age %></li>
  <li>Cute: <%=@pet.cute %></li>
</ul>

<%= link_to "Edit #{@pet.name}", edit_pet_path(@pet) %>

<%= link_to 'Show Toys', pet_toys_path(@pet), remote: true %>
<div class="show-toys">
</div>
```

### Toys

#### `app/views/toys/_toys.html.erb`
``` erb
<%= @pet.name %>'s' toys:
<ul>
  <% @toys.each do |toy| %>
    <li>
      <%= toy.description %>
    </li>
  <% end %>
</ul>
```

#### `app/views/toys/index.html.erb`
``` erb
<%= @pet.name %>'s' toys:
<ul>
  <% @toys.each do |toy| %>
    <li>
      <%= toy.description %>
    </li>
  <% end %>
</ul>
```

#### `app/views/toys/index.js.erb`
``` javascript
$(".show-toys").html("<%= j render partial: 'toys', locals: { toys: @toys } %>")
```

### Sessions

#### `app/views/sessions/new.html.erb`
``` erb
<h1>Login</h1>

<% if not @user %>
  <span class='error'>Email/password is incorrect</span><br><br>
<% end %>

<%= form_tag '/login' do %>
  Email: <%= text_field_tag :email %>
  Password: <%= password_field_tag :password %>
  <%= submit_tag "Submit" %>

<% end %>
```

### Users

#### `app/views/users/new.html.erb`
``` erb
<h1>Sign up</h1>

<%= form_for @user, url: '/users' do |f| %>
  <% if @user.errors.any? %>
    <h2><%= pluralize(@user.errors.count, "error") %> prohibited this post from being saved:</h2>
    <ul>
      <% @user.errors.full_messages.each do |msg| %>
        <li><%= msg %></li>
      <% end %>
    </ul>
  <% end %>

  Name: <%= f.text_field :name %>
  Email: <%= f.text_field :email %>
  Password: <%= f.password_field :password %>
  Password Confirmation: <%= f.password_field :password_confirmation %>
  <%= f.submit "Submit" %>

<% end %>
```

#### `app/views/users/show.html.erb`
``` erb
<h1><%= current_user.name %></h1>
<h2><%= current_user.email %></h2>
```

# Tests

### Generate model tests

    $ rails generate model Pet --no-migration --test-framework=rspec --skip
    $ rails generate model Toy --no-migration --test-framework=rspec --skip
    $ rails generate model User --no-migration --test-framework=rspec --skip

### Generate controller tests

    $ rails generate controller Pet --no-migration --test-framework=rspec --skip
    $ rails generate controller Toy --no-migration --test-framework=rspec --skip
    $ rails generate controller Session --no-migration --test-framework=rspec --skip
    $ rails generate controller User --no-migration --test-framework=rspec --skip
