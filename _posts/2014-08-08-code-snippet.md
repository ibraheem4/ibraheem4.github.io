---
layout: post
title: Code snippet
category: blog
tags:
  - example
modified: 2014-09-12T00:00:00-07:00
---

ruby
---

```ruby
def show
  @widget = Widget(params[:id])
  respond_to do |format|
  format.html # show.html.erb
  format.json { render json: @widget }
  end
end
```

shell
---

```shell
cd ~
```

python
---

```python
from google.appengine.ext import vendor
vendor.add('lib')
```

html
---

```html
<a href="#">Hello world</a>
```

java
---

```java
public class OracleJdbcTest {
    String driverClass = "oracle.jdbc.driver.OracleDriver";
    Connection con;
 
    public void init(FileInputStream fs) throws ClassNotFoundException, SQLException, FileNotFoundException, IOException {
        Properties props = new Properties();
        props.load(fs);
        String url = props.getProperty("db.url");
        String userName = props.getProperty("db.user");
        String password = props.getProperty("db.password");
        Class.forName(driverClass);
        con=DriverManager.getConnection(url, userName, password);
    }
 
    public void fetch() throws SQLException, IOException {
        PreparedStatement ps = con.prepareStatement("select SYSDATE from dual");
        ResultSet rs = ps.executeQuery();
        while (rs.next()) {
            // do the thing you do
        }
        rs.close();
        ps.close();
    }
    
    public static void main(String[] args) {
        OracleJdbcTest test = new OracleJdbcTest();
        test.init();
        test.fetch();
    }
}
```

css
---


```css
body {
  margin: 0;
  padding: 0;
  background: #ccc;
}

.nav ul {
  list-style: none;
  background-color: #444;
  text-align: center;
  padding: 0;
  margin: 0;
}

.nav li {
  font-family: 'Oswald', sans-serif;
  font-size: 1.2em;
  line-height: 40px;
  text-align: left;
}

.nav a {
  text-decoration: none;
  color: #fff;
  display: block;
  padding-left: 15px;
  border-bottom: 1px solid #888;
  transition: .3s background-color;
}

.nav a:hover {
  background-color: #005f5f;
}

.nav a.active {
  background-color: #aaa;
  color: #444;
  cursor: default;
}

/* Sub Menus */
.nav li li {
  font-size: .8em;
}

/*******************************************
   Style menu for larger screens

   Using 650px (130px each * 5 items), but ems
   or other values could be used depending on other factors
********************************************/

@media screen and (min-width: 650px) {
  .nav li {
    width: 130px;
    border-bottom: none;
    height: 50px;
    line-height: 50px;
    font-size: 1.4em;
    display: inline-block;
    margin-right: -4px;
  }

  .nav a {
    border-bottom: none;
  }

  .nav > ul > li {
    text-align: center;
  }

  .nav > ul > li > a {
    padding-left: 0;
  }

  /* Sub Menus */
  .nav li ul {
    position: absolute;
    display: none;
    width: inherit;
  }

  .nav li:hover ul {
    display: block;
  }

  .nav li ul li {
    display: block;
  }
}
```