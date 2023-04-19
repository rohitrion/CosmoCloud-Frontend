import React, { useState } from 'react'

const App = () => {

  const [feildNames, setFeildNames] = useState(["Field 1",
    "Field 2",
    "Field 3"]);

  const [numFeild, setnumFeilds] = useState(3);

  const [formData, setFormData] = useState({});

  const [feildType, setfeildType] = useState({})



  const handleAddFeild = () => {
    setnumFeilds(numFeild + 1);
    setFeildNames([...feildNames, `Field ${numFeild + 1}`]);
  }



  const handleDelete = (index) => {
    const del = feildNames.filter((it, ind) => index !== ind);
    setFeildNames(del);
  };


  const handleInputChange = (index, value) => {

    setFormData({
      ...formData,
      [feildNames[index]]: value
    })
  }

  const handleTypeChange = (index, value) => {
    setfeildType({
      ...feildType,
      [feildNames[index]]: value
    });

  }


  const handleAddNestedInput = (feildname) => {
    setFeildNames([...feildNames, `${feildname}.nested`])
    setfeildType({
      ...feildType,
      [`${feildname}`]: "string"
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank u data save in console with its type")
    console.log(formData, "type", feildType);
  }


  return (
    <div className="App">
      <div className='main' >

        <h3 className='heading'>Feild names and types  <button type="button" onClick={handleAddFeild} >+</button>  </h3>
        <form onSubmit={handleSubmit} >

          {

            feildNames.map((name, index) => (

              <div className='map' key={index} >
                <label>
                  {name}:
                  {feildType[name] === "object" && (
                    <button type="button" className='btn'
                      onClick={() => handleAddNestedInput(name)}
                    >
                      +
                    </button>
                  )}

                  <input className='inputt'
                    type={feildType[name] || "text"}
                    value={formData[name] || ""}
                    required
                    onChange={(e) => handleInputChange(index, e.target.value)}

                  />

                </label>

                <select className='select'
                  value={feildType[name] || ""}
                  onChange={(e) => handleTypeChange(index, e.target.value)}
                >
                  <option value="" >Select a type</option>
                  <option value="int" >int</option>
                  <option value="boolean"> boolean </option>
                  <option value="object">object</option>
                  <option value="sring">String</option>
                </select>

                <button type="button" onClick={() => handleDelete(index)} >Delete</button>

              </div>

            ))}

          <button className="submit" type='submit'>Submit</button>


        </form>


      </div>
    </div>
  )
}

export default App