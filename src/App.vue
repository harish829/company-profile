<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
     <div class="columns is-fullheight">
      <div class="column is-narrow side-menu-container">
        <aside class="menu">
        </aside>
      </div>
      <div class="column main-container">
          <header class="header">
              <div class="sub-header-navbar">
                <nav class="navbar subnavbar" role="navigation" aria-label="main navigation">
                  <div class="navbar-brand">
                      <a class="navbar-item" href="#">
                        <span class="navbar-item is-transparent is-mobile is-logo">
                          <img src="../src/assets/images/manufacton-Logo.png">
                        </span>
                      </a>
                  </div>
                  <div class="navbar-menu is-mobile">
                    <div class="navbar-item is-centered">
                      <span class="subtitle has-text-weight-bold is-uppercase has-text-white">
                        <i class="fa fas fa-cogs"></i> APP & PROJECT SETUP
                        </span>
                      </div>
                      <div class="navbar-item is-pulled-right">
                      </div>
                  </div>
                </nav>
                <nav class="navbar subnavbar" role="navigation"
                aria-label="main navigation has-background-black">

                </nav>
                <nav class="navbar subnavbar" role="navigation" aria-label="main navigation titlebar">
                </nav>
              </div>
          </header>
    <router-view/>
      </div>
      
 </div>
  </div>
</template>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
