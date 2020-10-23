



function Bounce(movingObject,stableObject){
    if(movingObject.x-stableObject.x < stableObject.width/2 + movingObject.width/2 
        && stableObject.x-movingObject.x < stableObject.width/2 + movingObject.width/2
        &&movingObject.y-stableObject.y < stableObject.height/2 + movingObject.height/2 
        && stableObject.y-movingObject.y < stableObject.height/2 + movingObject.height/2
    
    
        ){
            return true;
        // movingObject.shapeColor = "pink";
        // stableObject.shapeColor = "pink";
        
        // movingObject.velocityY=movingObject.velocityY*(-1);
        // stableObject.velocityY=stableObject.velocityY*(-1);
      }
    else{
    //   movingObject.shapeColor = "green";
    //   stableObject.shapeColor = "yellow";

      return false;
    }
    

}

