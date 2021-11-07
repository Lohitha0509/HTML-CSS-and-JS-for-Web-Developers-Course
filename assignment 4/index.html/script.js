var names=new Array();
names[0]="Yuvraj";
names[1]="Juhi";
names[2]="Johar";
names[3]="jason";
names[4]="payal";
names[5]="riya";
names[6]="lohitha";
names[7]="priya";
names[8]="srinivas";
names[9]="jimmy";

for (var i=0; i < names.length; i++)   {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
		console.log("Goodbye"+ names[i])
	}
	else{
		console.log("Hello"+ names[i])
    }

}
