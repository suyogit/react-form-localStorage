import { useState } from "react";

export  const useFilter = (data, callback) => {
    const [query, setquery] = useState('')
 
    const filteredData = data.filter((expense) =>
        callback(expense).toLowerCase().includes(query)
      );

return [filteredData, setquery]    
  
}
