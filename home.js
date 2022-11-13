//document.getElementById("drt").innerText ="hello namaskram "
//document.getElementById("pich").src = "db1.png"
let count = 0
document.getElementById("ch").addEventListener('click',change)

let beg =document.getElementById('beg');
beg.addEventListener('click',disp1)

let int =document.getElementById('int');
int.addEventListener('click',disp2)

let adv =document.getElementById('adv');
adv.addEventListener('click',disp3)

let disp = document.getElementById('disp');

let gdflex = document.getElementById('guideflex');
let gdbtn = document.getElementById('gdbtn')
gdbtn.addEventListener('click',back)

let hea =document.getElementById('dispuh');
let pa = document.getElementById('dispup');



function change(){
    
    count=count+1
    if(count==0){
        document.getElementById("pich").src = "assets/jogging.jpg"
       
    }
    if(count==1){
        document.getElementById("pich").src = "assets/gym.jpg"
        document.getElementById("communityhead").innerText = "resistance training"
        document.getElementById("community").innerText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam pariatur nam aperiam neque ipsa consequuntur. Ab eligendi distinctio earum atque rerum blanditiis quas id? Unde ut distinctio aut enim repellat.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi inventore repellat repudiandae dolorum ipsum fugiat omnis quae harum sequi aliquam eius, itaque alias, blanditiis vero tempora reiciendis accusamus voluptates debitis!"

    }
   
    if(count==2){
        document.getElementById("pich").src = "assets/gym2.jpg"
        document.getElementById("communityhead").innerText = "common myths"
        document.getElementById("community").innerText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam pariatur nam aperiam neque ipsa consequuntur. Ab eligendi distinctio earum atque rerum blanditiis quas id? Unde ut distinctio aut enim repellat.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi inventore repellat repudiandae dolorum ipsum fugiat omnis quae harum sequi aliquam eius, itaque alias, blanditiis vero tempora reiciendis accusamus voluptates debitis!"
    }
    if(count==3){
        document.getElementById("pich").src = "assets/squat.jpg"
        document.getElementById("communityhead").innerText = "cardio"
        document.getElementById("community").innerText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam pariatur nam aperiam neque ipsa consequuntur. Ab eligendi distinctio earum atque rerum blanditiis quas id? Unde ut distinctio aut enim repellat.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi inventore repellat repudiandae dolorum ipsum fugiat omnis quae harum sequi aliquam eius, itaque alias, blanditiis vero tempora reiciendis accusamus voluptates debitis!"
        
    }
    if(count==4){
        count=0
        document.getElementById("pich").src = "assets/jogging.jpg"
        document.getElementById("communityhead").innerText = "hey there"
        document.getElementById("community").innerText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam pariatur nam aperiam neque ipsa consequuntur. Ab eligendi distinctio earum atque rerum blanditiis quas id? Unde ut distinctio aut enim repellat.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi inventore repellat repudiandae dolorum ipsum fugiat omnis quae harum sequi aliquam eius, itaque alias, blanditiis vero tempora reiciendis accusamus voluptates debitis!"
    }
    
    
}
function disp1(){

    

    hea.innerText = "Beginner"
    pa.innerText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam pariatur nam aperiam neque ipsa consequuntur. Ab eligendi distinctio earum atque rerum blanditiis quas id? Unde ut distinctio aut enim repellat.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi inventore repellat repudiandae dolorum ipsum fugiat omnis quae harum sequi aliquam eius, itaque alias, blanditiis vero tempora reiciendis accusamus voluptates debitis!"

    gdflex.style['display']='none';
    disp.style['display']='block';
    gdbtn.style['display']='block';
    
}
function disp2(){

   
    hea.innerText = "Intermediate"
    pa.innerText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam pariatur nam aperiam neque ipsa consequuntur. Ab eligendi distinctio earum atque rerum blanditiis quas id? Unde ut distinctio aut enim repellat.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi inventore repellat repudiandae dolorum ipsum fugiat omnis quae harum sequi aliquam eius, itaque alias, blanditiis vero tempora reiciendis accusamus voluptates debitis!"
    
    gdflex.style['display']='none';
    disp.style['display']='block';
    gdbtn.style['display']='block';

    
}
function disp3(){
    
    hea.innerText = "Advanced"
    pa.innerText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam pariatur nam aperiam neque ipsa consequuntur. Ab eligendi distinctio earum atque rerum blanditiis quas id? Unde ut distinctio aut enim repellat.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi inventore repellat repudiandae dolorum ipsum fugiat omnis quae harum sequi aliquam eius, itaque alias, blanditiis vero tempora reiciendis accusamus voluptates debitis!"

    gdbtn.style['display']='block';
    gdflex.style['display']='none';
    disp.style['display']='block';

    
}
function back(){
    gdflex.style['display']='flex'
    gdbtn.style['display']='none';
    disp.style['display']='none';
}