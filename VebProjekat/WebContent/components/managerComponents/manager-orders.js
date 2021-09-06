Vue.component("manager-orders", {

    data() {
        return {
            orders : []
        }
    },
	
	template: ` 
    <div id="container">
   
    <section class="r-section" v-if="orders.length!=0">
    <h1></h1>

    <div class="r-gap"></div>

    <div id="coms">
         <div class="tbl-header">
              <table  class="r-table" cellpadding="0" cellspacing="0" border="0">
                   <thead>
                        <tr>
                             <th>Kupac</th>
                             <th>Cijena</th>
                             <th>Status</th>
                             <th>Promijeni status</th>
                             <th></th>
                             
                        </tr>
                   </thead>
              </table>
         </div>
         <div class="tbl-content">
              <table class="r-table" cellpadding="0" cellspacing="0" border="0">
                   <tbody>
                        <tr v-for="order in orders">
                             <td> {{ order.customer }} </td>
                             <td> {{ order.price }} </td>
                             <td v-if="order.status=='PENDING'"> Obrada </td>
                             <td v-else-if="order.status=='IN_PREPARATION'"> U pripremi </td>
                             <td v-else-if="order.status=='AWAITING_DELIVERER'"> Čeka dostavljača </td>
                             <td v-else-if="order.status=='SHIPPING'"> U transportu </td>
                             <td v-else-if="order.status=='DELIVERED'"> Dostavljena </td>
                             <td v-else> Otkazana </td>
                             <td><span>-</span></td>
                             <td><button>Detaljnije</button></td>
                           
               
                        </tr>
                   </tbody>
              </table>
         </div>
    </div>


    <div class="r-gap"></div>

</section>
<section class="r-section" v-else>
<div class="gtco-section">
<div class="gtco-container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2 text-center gtco-heading">
            <h1 class="cursive-font primary-color">Trenutno nema porudžbina.</h1>
            
        </div>
    </div>
    </div>
</div>
</section >
</div>
    
    
`,
mounted : function() {
    axios
   .get('rest/orders/getAllOrdersForRestaurant')
   .then(response => (this.orders = response.data))
}

/*methods:{
     approveComment : function(comment){
          axios
          .put('rest/comments/approveComment/' + comment.id)
          .then(response=>{
               this.comments = [];
               response.data.forEach(x => {
                   this.comments.push(x);
               });
               return this.comments;
          }
          )
     },
     declineComment : function(comment){
          axios
          .put('rest/comments/rejectComment/' + comment.id)
          .then(response=>{
               this.comments = [];
               response.data.forEach(x => {
                   this.comments.push(x);
               });
               return this.comments;
          }
          )
     }


}*/

});