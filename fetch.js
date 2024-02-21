export const getData = async () =>{
  const res = await fetch('https://restcountries.com/v3.1/all');
  if(!res.ok) throw new Error('Failed to fetch data');
  try{
    const data = await res.json();
    return data;
  }catch(err){
    console.log(err);
  }finally{
    console.log('finally');
  }
};
export const getCountryByName = async (name) =>{
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  if(!res.ok) throw new Error('Failed to fetch data');
  try{
    const data = await res.json();
    return data;
  }catch(err){
    console.log(err);
  }finally{
    console.log('finally');
  }
}

export const getCountryByCode = async (code) =>{
  const res = await fetch(`https://restcountries.com/v3.1/https://restcountries.com/v3.1/alpha?codes=${code.toLowerCase()}`);
  if(!res.ok) throw new Error('Failed to fetch data');
  try{
    const data = await res.json();
    return data;
  }catch(err){
    console.log(err);
  }finally{
    console.log('finally');
  }
}
