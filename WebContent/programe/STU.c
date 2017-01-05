#include<stdio.h>
void main()
{
 char rollno[10]=" ";
 char language[40]=" ";
 char student[50]=" ";
 int mark;
 int a;
 int i,j,k;
 printf("enter the roll no\n");
 for(i=0;i<5;i++)
 {
  scanf("%s",&rollno);
 }
 printf("enter the language\n");
 for(j=0;j<5;j++)
 {
   scanf("%s",&language);
 }
 printf("enter the student\n");
 for(k=0;k<5;k++)
 {
    scanf("%s",&student);

 }
printf("enter the mark\n");
for(a=0;a<5;a++)
{
 scanf("%d",&mark);
}
if(a>35){
    printf("pass",&a);
}
else{
    printf("fail",&a);
}
}

