class GameController{
    constructor(){
        this.vez = false;
        this.initEvents();  

    }

    initEvents(){

        let buttons = document.querySelectorAll('.casa');


        buttons.forEach(btn =>{
            
            btn.addEventListener('click',()=>{

                console.log(btn.innerHTML);

                if(btn.innerHTML != 'X' && btn.innerHTML != 'O'){
          
                    if(this.vez){
                        btn.innerHTML = 'X';
                    }else{
                        btn.innerHTML = 'O';

                    }
                    this.vez = !this.vez;
                }
     
            });

        });

    }






}