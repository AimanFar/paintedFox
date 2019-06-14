<template>
  <div>
    <div class=" is-centered is-vcentered">
      <div class=" p10 navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-menu ">
          <div class="navbar-start">
            <div class="navbar-brand">
              <div class="navbar-item">
                <g-link to="/">
                  <g-image src="~/assets/img/logo.svg" width=350 />
                </g-link>
              </div>
            </div>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <g-link to="/contact" class="button is-black is-medium">
                <strong class="t is-size-7">
                  Book A Discovery Call
                </strong>
              </g-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <slot />

    <div class="footer">

    </div>

  </div>
</template>

<static-query>
  query {
  metaData {
  siteName
  }
  }
</static-query>

<script>
  export default {}
</script>


<style>
.p10 {
  padding-top: 0.8rem;
  padding-bottom: 0.7rem;
}
.navbar {
  border-bottom: 0.1px double gray;
}
</style>