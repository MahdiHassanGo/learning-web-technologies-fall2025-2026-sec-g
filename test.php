<?php


$name = "World";//string
$id=12; // integer
$cgpa=3.1; //float


$std = array (1,"asif",3.5);  //numeric array
$std=[1,'asif',3.5]; //numeric array   

$std =['id'=>1 ,'name'=>"asif",'cgpa'=>3.5]; //associative array

$std =['cgpa'];
$std = [
['id'=>1 ,'name'=>"asif",'cgpa'=>3.5],
['id'=>2 ,'name'=>"jamal",'cgpa'=>3.8],
['id'=>3 ,'name'=>"karim",'cgpa'=>3.2],
    
]//multidimensional array

$std[2]['cgpa']; 

$stds =[

   's1'=> ['id'=>1 ,'name'=>"asif",'cgpa'=>3.5],
    's2'=> ['id'=>2 ,'name'=>"jamal",'cgpa'=>3.8],
   's3'=> ['id'=>3 ,'name'=>"karim",'cgpa'=>3.2],
]



function add($a, $b){
    return $a + $b;
}   
 add(2,3); 


 for ($i=0; $i < 10; $i++){
    echo $i;
    }
    

echo "Hello, ";  //print statement (faster than print)

print "Hello, "; //print statement (slower than echo)
    
    ?>