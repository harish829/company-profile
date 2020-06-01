<template>
  <div class="has-background-white content is-medium">
     <div class="column">  
       <div class="columns">
          <div class="column has-background-grey border-radius">
            <h4 class="title is-size-5 has-text-weight-bold">Account Type</h4>
            <p>projectname</p>
            <p>(Please contact <a>ManufactOn Support</a> to change your license type)</p>
            <div class="media">
              <p class="title is-size-5 has-text-weight-bold">Billing</p>
              </div>
            <div class="media">
              <div class="media-left">
                <span class="icon"><i class="fa fa-user fa-1x"></i></span>
              </div>
              <div class="media-content">
                  abcdef
              </div>
            </div>
            <div class="media">
              <div class="media-left">
                <span class="icon"><i class="fa fa-envelope fa-1x"></i></span>
              </div>
              <div class="media-content">
                qa@amrutha.comp
              </div>
            </div>
            <div class="media">
              <div class="media-left">
                <span class="icon"><i class="fa fa-envelope fa-1x"></i></span>
              </div>
              <div class="media-content">
                qa@amrutha.comp
              </div>
            </div>
            <div class="media">
              <p class="title is-size-5 has-text-weight-bold">Website</p>
            </div>
            <div class="media">
              <div class="media-left">
                <span class="icon"><i class="fa fa-link  fa-1x"></i></span>
              </div>
              <div class="media-content">
                http://www.https.com
              </div>
            </div>
            <div class="media">
              <p class="title is-size-5 has-text-weight-bold">Company Logo</p>
            </div>
          </div>
          <div class="is-divider-vertical"></div>
          <div class="column has-background-grey border-radius">
             <h4 class="title is-size-5 has-text-weight-bold">Address 1:</h4>
             <div class="media">
              <div class="media-left">
                <span class="icon"><i class="fa fa-home  fa-1x"></i></span>
              </div>
              <div class="media-content">
                Amrutha company
              </div>
            </div>
            <div class="media">
              <div class="media-left">
                <span class="icon"><i class="fas fa-map-marker-alt fa-1x"></i></span>
              </div>
              <div class="media-content">
                 <p>Bangalore</p>
                 <p>Bangalore</p>
                 <p>Bangalore</p>
                 <p>Bangalore</p>
              </div>
            </div>
             <div class="media">
              <div class="media-left">
                <span class="icon"><i class="fa fa-phone fa-1x fa-flip-horizontal"></i></span>
              </div>
              <div class="media-content">
                <p>8765432115</p>
              </div>
            </div>
             <div class="media">
              <p class="title is-size-5 has-text-weight-bold">Address 2:
               <span class="has-text-grey-light is-size-6">(optional)</span></p>
             </div>
              <div class="media">
                <div class="media-left">
                  <span class="icon"><i class="fa fa-home  fa-1x"></i></span>
                </div>
              </div>
               <div class="media">
              <div class="media-left">
                <span class="icon"><i class="fa fa-phone fa-1x fa-flip-horizontal"></i></span>
              </div>
              <div class="media-content">
                <p>8765432115</p>
              </div>
            </div>
          </div>
        </div>
         <div class="column">
            <h4 class="title is-size-4 has-text-centered">Default Manufacturing Runs</h4>
                  <h5 class="title is-size-5">For Productivity-Tracking Orders</h5>
        </div>
        <div class="column has-background-grey border-radius">
          <span class="is-medium is-rounded "> sadfasd </span>
        </div>
     </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: 0,
    };
  },
  computed: {
    baseTabs() {
      return [
        {
          label: 'Accounts',
        },
      ];
    },
  },
};
</script>
