export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '440a1ef350msh58ecb762a59e282p186cdfjsn2a275e379329',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
  };

export const fetchData= async(url,options)=>{
    const response =await fetch(url,options);
    const data= await response.json();
    return data;
}