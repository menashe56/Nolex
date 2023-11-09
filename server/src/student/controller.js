
const { response } = require('express');
const { Pool } = require('pg');
const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  port: 5432,
  password: '123456',
  database: 'students',
});
const queries = require('./queries');

const getStudents = (req,res) =>{
    pool.query(queries.getStudents,(error,results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getStudentById = (req,res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById, [id], (error,results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const addStudent = (req,res) => {
    const {name, email, age, dob} = req.body;

    //check if email exists
    pool.query(queries.checkEmailExists, [email], (error,results) => {
        if(results.rows.length) {
            res.send("Email already exists");
        }else{
        //add student to database
        pool.query(queries.addStudent, [name, email, age, dob], (error,results) => {
            if(error) throw error;
            res.status(201).send("student created successfuly!");
        })
    }
    })
}

const removeStudent = (req,res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getStudentById, [id], (error,results) => {
        const noStudentFount = !results.rows.length;
        if(noStudentFount){
        res.send("Student does not exist in the database");
        }else{
            pool.query(queries.removeStudent, [id], (error, results) => {
                if(error) throw error;
                res.status(200).send("student removed successfuly!")
            })
        }
    })
}

const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const {name} = req.body;

    pool.query(queries.getStudentById, [id], (error, results) => {
        const noStudentFount = !results.rows.length;
        if(noStudentFount){
        res.send("Student does not exist in the database");
        } else {
            pool.query(queries.updateStudent, [name, id], (error, results) => {
                if(error) throw error;
                res.status(200).send("student updated successfuly!")
            })
        }
    })

}

module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    removeStudent,
    updateStudent,
};
