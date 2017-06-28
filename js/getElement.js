const doc = document;
const wrap = doc.querySelectorAll('.wrap')[0];
const goHome = doc.querySelectorAll('.gohome')[0];
const navBar = doc.querySelectorAll('.nav-bar')[0];
const onload = doc.querySelectorAll('.onload')[0];
const square = doc.querySelectorAll('.onload div');
const home = doc.querySelectorAll('.home')[0];
const ps = home.querySelectorAll('p');
const kid = doc.querySelectorAll('.kid')[0];
const title = kid.querySelectorAll('.title')[0];
const box = doc.querySelectorAll('.box')[0];
const details = doc.querySelectorAll('.details')[0];
let num = 0;//页数
let n = 0;//切换
const decOne = doc.querySelectorAll('.pageOne-content-dec')[0];
const imgOnes = doc.querySelectorAll('.pageOne-content img');
const textOne = doc.querySelectorAll('.pageOne-content-text')[0];
const decTwo = doc.querySelectorAll('.pageTwo-content-dec')[0];
const imgTwos = doc.querySelectorAll('.pageTwo-content img');
const textTwo = doc.querySelectorAll('.pageTwo-content-text')[0];
const decThree = doc.querySelectorAll('.pageThree-content-dec')[0];
const imgThrees = doc.querySelectorAll('.pageThree-content img');
const textThree = doc.querySelectorAll('.pageThree-content-text')[0];
const decFour = doc.querySelectorAll('.pageFour-content-dec')[0];
const imgFours = doc.querySelectorAll('.pageFour-content img');
const textFour = doc.querySelectorAll('.pageFour-content-text')[0];
const adds = doc.querySelectorAll('.page .add');
const btns = doc.querySelectorAll('.btn');
const img = doc.getElementById('img');
const textH3 = doc.getElementById('textH3');
const textP = doc.getElementById('textP');

let m = 0;
let onOff = true;
const h = document.documentElement.clientHeight;
const prev = doc.querySelectorAll('.prev')[0];
const next = doc.querySelectorAll('.next')[0];
const cancel = doc.querySelectorAll('.cancel')[0];
const switchNum = doc.querySelectorAll('#switchNum')[0];
const total = doc.querySelectorAll('#total')[0];


const dataArr = [
    {
        imgs:['images/page1.pic1.png','images/page1.pic2.png','images/page1.pic3.png','images/page1.pic4.png','images/page1.pic5.png','images/page1.pic6.png','images/page1.pic7.png','images/page1.pic8.png','images/page1.pic9.png'],
        textH3:['CAMELOT BUNK BED','ERGO BUNK BED','CLEO BED','CROSS BED','KAP BED','PILLOW BED','ZIGGY BED','LOFT BED','SLIDE BED'],
        textP:['camelot comes in a choice of versions:one bed,two beds or bed and desk combo','The same footprint as a single bed but with so many more functions! Theres room under the bed for storage units, bookcases and desks.','So many bed combinations! Cleo has a padded headboard and can be mixed and matched with lots of different legs!','How do you make this bed? You take the Nuk headboard, the Woody legs and the new removable Cross cover.','The curtains on the Kap four-poster bed are perfect for creating a little hideaway world within the room.','Reading in bed is more comfortable with the padded Pillow headboard!','If its zigzagging, its the padded Ziggy cover.','Theres room under the bed for the wardrobe and desk.','The bedroom transforms! At night, the beds in the middle of the room, during the day it slides back against the wall.']
    },
    {
        imgs:['images/page2.pic1.png','images/page2.pic2.png','images/page2.pic3.png','images/page2.pic4.png','images/page2.pic5.png','images/page2.pic6.png','images/page2.pic7.png','images/page2.pic8.png'],
        textH3:['CAMELOT BUNK BED','ERGO BUNK BED','CLEO BED','CROSS BED','KAP BED','PILLOW BED','ZIGGY BED','LOFT BED'],
        textP:['camelot comes in a choice of versions:one bed,two beds or bed and desk combo','The same footprint as a single bed but with so many more functions! Theres room under the bed for storage units, bookcases and desks.','So many bed combinations! Cleo has a padded headboard and can be mixed and matched with lots of different legs!','How do you make this bed? You take the Nuk headboard, the Woody legs and the new removable Cross cover.','The curtains on the Kap four-poster bed are perfect for creating a little hideaway world within the room.','Reading in bed is more comfortable with the padded Pillow headboard!','If its zigzagging, its the padded Ziggy cover.','Theres room under the bed for the wardrobe and desk.']
    },
    {
        imgs:['images/page3.pic1.png','images/page3.pic2.png','images/page3.pic3.png','images/page3.pic4.png','images/page3.pic5.png','images/page3.pic6.png','images/page3.pic7.png','images/page3.pic8.png'],
        textH3:['CAMELOT BUNK BED','ERGO BUNK BED','CLEO BED','CROSS BED','KAP BED','PILLOW BED','ZIGGY BED','LOFT BED'],
        textP:['camelot comes in a choice of versions:one bed,two beds or bed and desk combo','The same footprint as a single bed but with so many more functions! Theres room under the bed for storage units, bookcases and desks.','So many bed combinations! Cleo has a padded headboard and can be mixed and matched with lots of different legs!','How do you make this bed? You take the Nuk headboard, the Woody legs and the new removable Cross cover.','The curtains on the Kap four-poster bed are perfect for creating a little hideaway world within the room.','Reading in bed is more comfortable with the padded Pillow headboard!','If its zigzagging, its the padded Ziggy cover.','Theres room under the bed for the wardrobe and desk.']
    },
    {
        imgs:['images/page4.pic1.png','images/page4.pic2.png','images/page4.pic3.png','images/page4.pic4.png','images/page4.pic5.png','images/page4.pic6.png','images/page4.pic7.png','images/page4.pic8.png'],
        textH3:['CAMELOT BUNK BED','ERGO BUNK BED','CLEO BED','CROSS BED','KAP BED','PILLOW BED','ZIGGY BED','LOFT BED'],
        textP:['camelot comes in a choice of versions:one bed,two beds or bed and desk combo','The same footprint as a single bed but with so many more functions! Theres room under the bed for storage units, bookcases and desks.','So many bed combinations! Cleo has a padded headboard and can be mixed and matched with lots of different legs!','How do you make this bed? You take the Nuk headboard, the Woody legs and the new removable Cross cover.','The curtains on the Kap four-poster bed are perfect for creating a little hideaway world within the room.','Reading in bed is more comfortable with the padded Pillow headboard!','If its zigzagging, its the padded Ziggy cover.','Theres room under the bed for the wardrobe and desk.']
    }
]