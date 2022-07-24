function validateReq(serviceName,method,contentType)
{
 
  if(serviceName=="/Insert")
  {
   if(method=="POST")
   {
   	if(contentType=="application/json")
   	{
   		return 1; 
   	}
    else
    {
    	return "Invalid content type";
    }
   }
   else
   {
   	return "Invalid method";
   }
  }
  else if(serviceName=="/Delete")
  {
   if(method=="DELETE")
   {
   	if(contentType=="application/json")
   	{
   		return 1;
   	}
    else
    {
    	return "Invalid content type";
    }
   }
   else
   {
   	return "Invalid method";
   }
  }
  else if(serviceName=="/Update")
  {
   if(method=="PUT")
   { 
   	if(contentType=="application/json")
   	{
   		return 1;
   	}
    else
    {
    	return "Invalid content type";
    }
    }
   else
   {
   	return "Invalid method";
   }
  }
  else if(serviceName=="/All")
  {
   if(method=="GET")
   { 
     if(contentType=="application/json")
   	{
   		return 1;
   	}
    else
    {
    	return "Invalid content type";
    }
    }
   else
   {
   	return "Invalid method";
   }
  }
  else if(serviceName=="/Specific")
  {
   if(method=="GET")
   {
   	if(contentType=="application/json")
   	{
   		return 1;
   	}
    else
    {
    	return "Invalid content type";
    }
   }
   else
   {
   	return "Invalid method";
   }
  }
  else
  {
    return "Invalid service";
  }
}

module.exports={validateReq};