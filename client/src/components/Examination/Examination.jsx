import React from 'react'

export const Examination = () => {
  return (
    <>
        <div>
            <div>
                <label>Admission no:</label>
                <input
                // className={pstyle.input}
                type="text"
                placeholder="Name"
                name="name"
                required
                // onChange={handleChange}
                ></input>
            </div>
            <form onSubmit={handleSubmit}>
                <Anthropometry />
                <PhysicalExamination />
                <Pedegree />
                <ExpertOpinion />
            </form>
            
        </div>
    </>
  )
}
