export const productMixin = {
    data(){
        return {
          products : ["Monitör", "Klavye" , "Telefon" , "Şişe", "Bardak" , "Kahve"],
          searchText : ''
        }
      },
      computed : {
        filtered(){ 
          return this.products.filter((element) => {
            return element.match(this.searchText)
          })
        }
      }
}