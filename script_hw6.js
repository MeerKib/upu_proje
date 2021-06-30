let form=document.querySelector('form');
let fname = document.querySelector('#fname');
let tcNo= document.querySelector('#tcNo');
let phone= document.querySelector('#phone');
let email= document.querySelector('#email');
let btnSubmit= document.querySelector('#btn-submit');





eventListener();

function eventListener(){
    form.addEventListener('submit',addNewStaffInfo);

}

function addNewStaffInfo(e){
    const infoList=[]
    
    let staffList={
        adSoyad:fname.value,
        tcNo:tcNo.value,
        telNo:phone.value,
        email:email.value,
        fullname: function(){
            return 'Ad Soyad :'+' '+ this.adSoyad;
        },
        tcId: function(){
            return 'Tc No :'+' '+ this.tcNo;
        },
        phoneNo: function(){
            return 'Telefon No :'+' '+ this.telNo;
        },
        ePosta: function(){
            return ' E-Posta :'+' '+ this.email;
        }
    
    }

    

    
  
    //card
    let infoStaff=document.querySelector('.infoStaff')
    let card=document.createElement('div');
    card.className='card'

    let cardText= document.createElement('div');
    cardText.className='text'
    card.appendChild(cardText)
    
    //p

  
    let p= document.createElement('p');
    p.className='p-text fname'
    p.innerHTML= staffList.fullname();
    let p1= document.createElement('p');
    p1.className='p-text tcNo';
    p1.innerHTML=staffList.tcId();
    let p2= document.createElement('p');
    p2.className='p-text phoneNo';
    p2.innerHTML=staffList.phoneNo();
    let p3= document.createElement('p');
    p3.className='p-text email';
    p3.innerHTML=staffList.ePosta();

    // //append card-infoStaff
    infoStaff.appendChild(card)
    cardText.appendChild(p);
    cardText.appendChild(p1);
    cardText.appendChild(p2);
    cardText.appendChild(p3);

    //icon

    const icon=document.createElement('div')
    icon.className='icon'
    card.appendChild(icon)

    // icon > a

    const exitIcon=document.createElement('a');
    exitIcon.setAttribute('href','#')
    exitIcon.className='exitIcon';
    exitIcon.innerHTML='<i class="far fa-times-circle"></i>'
    icon.appendChild(exitIcon);
    const editIcon=document.createElement('a');
    editIcon.setAttribute('href','#');
    editIcon.className='editIcon';
    editIcon.innerHTML='<i class="far fa-edit"></i>';
    icon.appendChild(editIcon);



    card.addEventListener('click',exitItem)

    function exitItem(e){
        if(e.target.className==='far fa-times-circle'){
            e.target.parentElement.parentElement.parentElement.remove()
        }

        else if( e.target.className==='far fa-edit'){
            let formHeader=document.querySelector('.formHeader')
            formHeader.children[0].textContent='Personel Bilgilerini Düzenle'
            btnSubmit.value='Bilgileri Kaydet'
            fname.value=staffList.adSoyad;
            tcNo.value=staffList.tcNo;
            phone.value=staffList.telNo;
            email.value=staffList.email;
        }
        e.preventDefault()

    }
    
    
















    e.preventDefault();
    
}




