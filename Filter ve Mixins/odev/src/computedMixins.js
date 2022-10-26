export const computedMixins = {
    
      computed : {
        reverse(){
          return this.message.split("").reverse().join();
        },
        lenghtCount(){
          return this.message + this.message.length + ")";
        }
      }
}