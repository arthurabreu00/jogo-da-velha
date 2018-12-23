class GameController{
    constructor(){
        this.vez = false;
        this.initEvents();  

    }

    initEvents(){

        this.buttons = document.querySelectorAll('.casa');


        this.buttons.forEach(btn =>{
            
            btn.addEventListener('click',()=>{

                console.log(btn.innerHTML);

                if(btn.innerHTML != 'X' && btn.innerHTML != 'O'){
          
                    if(this.vez){
                        btn.innerHTML = 'X';
                        document.querySelector('#vez').innerHTML =  'O';
                    }else{
                        btn.innerHTML = 'O';
                        document.querySelector('#vez').innerHTML =  'X';

                    }
                    this.vez = !this.vez;
                }
     
            });

        });
    }

}