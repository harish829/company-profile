<template>
  <div class="has-background-white content is-medium">
      <div class="column">
        <div class="column">
          <div class="columns">
            <div class="column">
              <div class="buttons is-pulled-right">
              <button class="button is-primary is-pulled-right" @click="edit">
                <i class="fa fa-pen"></i>
              </button>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column has-background-grey border-radius">
              <h4 class="title is-size-5 has-text-weight-bold">Account Type</h4>
              <p>projectname</p>
              <p>(Please contact <a>ManufactOn Support</a>
                to change your license type)</p>
              <h4 class="title is-size-5 has-text-weight-bold">Billing</h4>
              <div class="columns">
                <div class="column is-narrow"><span class="icon">
                    <i class="fa fa-user fa-1x"></i>
                  </span> </div>
                <div class="column">
                  <p> abcdef</p>
                </div>
              </div>
              <div class="columns">
                <div class="column is-narrow">
                  <span class="icon">
                    <i class="fa fa-envelope fa-1x"></i>
                  </span>
                </div>
                <div class="column">
                  <p> qa@amrutha.comp</p>
                </div>
              </div>
              <h4 class="title is-size-5">Website</h4>
              <div class="columns">
                <div class="column is-narrow">
                  <span class="icon">
                    <i class="fa fa-link  fa-1x"></i>
                  </span>
                </div>
                <div class="column">
                  <p> http://www.https.com</p>
                </div>
              </div>
              <h4 class="title is-size-5 has-text-weight-bold">Company Logo</h4>
            </div>
            <div class="is-divider-vertical"></div>
            <div class="column has-background-grey border-radius">
                <h4 class="title is-size-5 has-text-weight-bold">Address 1:</h4>
              <div class="columns">
                <div class="column is-narrow">
                  <span class="icon">
                    <i class="fa fa-home fa-1x"></i>
                  </span>
                </div>
                <div class="column">
                  <p>Amrutha company</p>
                </div>
              </div>
              <div class="columns">
                <div class="column is-narrow">
                  <i class="fas fa-map-marker-alt fa-1x"></i>
                </div>
                <div class="column">
                  <p>Bangalore</p>
                  <p>Bangalore</p>
                  <p>Bangalore</p>
                  <p>Bangalore</p>
                </div>
              </div>
              <div class="columns">
                <div class="column is-narrow">
                  <span class="icon">
                      <i class="fa fa-phone fa-1x fa-flip-horizontal"></i>
                    </span>
                </div>
                <div class="column">
                  <p>8765432115</p>
                </div>
              </div>
                  <h4 class="title is-size-5 has-text-weight-bold">Address 2:
                    <span class="has-text-grey-light is-size-6">(optional)</span></h4>
                <div class="columns">
                  <div class="column is-narrow">
                    <span class="icon">
                      <i class="fa fa-home fa-1x"></i>
                    </span>
                  </div>
                  <div class="column is-narrow">
                    <p></p>
                  </div>
                </div>
                <div class="columns">
                <div class="column is-narrow">
                  <span class="icon">
                      <i class="fa fa-phone fa-1x fa-flip-horizontal"></i>
                    </span>
                </div>
                <div class="column">
                  <p>8765432115</p>
                </div>
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
      <!-- edit section start here -->
    <!-- <div class="column">
      <div class="columns">
        <div class="column">
          <div class="buttons is-pulled-right">
            <button class="button is-success"><i class="fas fa-check"></i></button>
            <button class="button is-danger"><i class="fas fa-times"></i></button>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column has-background-grey border-radius">
          <h4 class="title is-size-5 has-text-weight-bold">Account Type</h4>
          <p>projectname</p>
          <p>(Please contact <a>ManufactOn Support</a>
             to change your license type)</p>
          <h4 class="title is-size-5 has-text-weight-bold">Billing</h4>
            <div class="columns">
              <div class="column is-narrow">
                <span class="icon">
                <i class="fa fa-user fa-1x"></i>
                </span>
              </div>
              <div class="column">
                  <input type="text" autocomplete="on" placeholder="Billing" class="input">
              </div>
            </div>
             <div class="columns">
              <div class="column is-narrow">
                <span class="icon">
                <i class="fa fa-envelope fa-1x"></i>
                </span>
              </div>
              <div class="column">
                  <input type="text" autocomplete="on" placeholder="Mail ID" class="input">
              </div>
            </div>
            <h4 class="title is-size-5 has-text-weight-bold">Website</h4>
            <div class="columns">
              <div class="column is-narrow">
                <span class="icon">
                <i class="fa fa-link fa-1x"></i>
                </span>
              </div>
              <div class="column">
                  <input type="text" autocomplete="on" placeholder="Website" class="input">
              </div>
            </div>
            <h4 class="title is-size-5 has-text-weight-bold">Company Logo</h4>
            <a data-v-065c1bfc="" class="button is-primary is-medium">
              <span class="icon"><i class="fas fa-upload fa-lg"></i></span><span>Add Image</span>
            </a>
        </div>
         <div class="is-divider-vertical"></div>
        <div class="column has-background-grey border-radius">
          <h4 class="title is-size-5 has-text-weight-bold">Address 1:</h4>
          <div class="columns">
              <div class="column is-narrow">
                <span class="icon">
                <i class="fa fa-home fa-1x"></i>
                </span>
              </div>
              <div class="column">
                  <input type="text" autocomplete="on" placeholder="Company Name" class="input">
              </div>
            </div>
          <div class="columns">
              <div class="column is-narrow">
                <span class="icon">
                <i class="fas fa-map-marker-alt fa-1x"></i>
                </span>
              </div>
              <div class="column">
                  <p><input type="text" autocomplete="on" placeholder="Street" class="input"></p>
                  <p><input type="text" autocomplete="on" placeholder="City" class="input"></p>
                  <p><input type="text" autocomplete="on" placeholder="State" class="input"></p>
                  <p><input type="text" autocomplete="on" placeholder="Country" class="input"></p>
              </div>
            </div>
             <div class="columns">
              <div class="column is-narrow">
                <span class="icon">
                <i class="fas fa-phone fa-1x fa-flip-horizontal"></i>
                </span>
              </div>
              <div class="column">
                  <input type="text" autocomplete="on" placeholder="Phone number" class="input">
              </div>
            </div>
            <h4 data-v-687b0926="" class="title is-size-5 has-text-weight-bold">Address 2:
              <span data-v-687b0926="" class="has-text-grey-light is-size-7">(optional)</span></h4>
                <div class="columns">
                  <div class="column is-narrow">
                    <span class="icon">
                    <i class="fa fa-home fa-1x"></i>
                    </span>
                  </div>
                </div>
              <div class="columns">
              <div class="column is-narrow">
                <span class="icon">
                <i class="fa fa-phone fa-1x fa-flip-horizontal"></i>
                </span>
              </div>
              <div class="column">
                  <input type="text" autocomplete="on" placeholder="Phone number" class="input">
              </div>
            </div>
        </div>
      </div>
    </div>
    <div class="column">
        <h4 class="title is-size-4 has-text-centered">Default Manufacturing Runs</h4>
              <h5 class="title is-size-5">For Productivity-Tracking Orders</h5>
      </div>
    <div class="column has-background-grey border-radius">
          <input type="text" autocomplete="on" placeholder="add the text" class="input">
    </div> -->
      </div>
  </div>
</template>
<style  scoped>
</style>
