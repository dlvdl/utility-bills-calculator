import styles from "./form.module.css"
import { useState, useEffect } from "react"
import { useOperationsContext } from "../../context/operations_context"
import { useSettingsContext } from "../../context/settings_context"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import { Button, TextField } from "@mui/material"
import { changeMonth } from "../../utility/changeMonth"
import { TariffSelect } from "../index"
import { Factory } from "../../utility/factory"

function Form(props) {
  const {
    createOneOperation,
    create_one_operation_error,
    one_operation,
    operations_loading,
    saveOneOperation,
  } = useOperationsContext()
  const { current_tariff } = useSettingsContext()

  const { typeOfUtility, units, today, setDate } = props
  const [inputValue, setInputValue] = useState({ current: 0, previous: 0 })

  // Event listeners
  const handleSubmit = async (e) => {
    e.preventDefault()
    const { current, previous } = inputValue
    const { name, cost } = current_tariff

    if (current <= 0) {
      return
    }

    const operationsSchema = new Factory("Record", {
      currReadings: current,
      prevReadings: previous,
      service: name,
      tariff: cost,
    })

    if (operationsSchema) {
      createOneOperation(operationsSchema)
    }
  }

  const changeDateHandler = (e) => {
    // Action is a dataset of svg icon of the button
    const action = e.target.children[0].dataset.testid
    if (!action) return
    const newDate = changeMonth(new Date(today), action)
    setDate(newDate)
  }

  const onChangeInputHandler = (e) => {
    if (e.target.name === "current") {
      setInputValue({ ...inputValue, current: Number(e.target.value) })
    }

    if (e.target.name === "previous") {
      setInputValue({ ...inputValue, previous: Number(e.target.value) })
    }
  }

  const saveButtonHandler = (e) => {
    saveOneOperation(one_operation)
    setInputValue({ current: 0, previous: 0 })
    console.log(one_operation)
  }

  return (
    <div className={styles.formControl}>
      <div className="flex f-justify-content-center">
        <Button onClick={changeDateHandler}>
          <ArrowBackIosIcon
            sx={{ pointerEvents: "none", cursor: "not-allowed" }}
          />
        </Button>
        <h3>
          {new Date(today).toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h3>
        <Button onClick={changeDateHandler}>
          <ArrowForwardIosIcon
            sx={{ pointerEvents: "none", cursor: "not-allowed" }}
          />
        </Button>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          {/* <input
            type="number"
            name="current"
            value={Number(inputValue.current).toString()}
            onChange={onChangeInputHandler}
          /> */}
          <TextField
            required
            id="outlined-required"
            label="Current readings"
            name="current"
            alue={Number(inputValue.current).toString()}
            onChange={onChangeInputHandler}
            fullWidth
          ></TextField>
        </div>

        <div>
          <TextField
            required
            id="outlined-required"
            label="Previous readings"
            name="previous"
            alue={Number(inputValue.p).toString()}
            onChange={onChangeInputHandler}
            fullWidth
          ></TextField>
        </div>

        <div className="flex">
          <TariffSelect />
        </div>

        {false && (
          <div
            className={`flex f-justify-content-center ${
              create_one_operation_error ? "error" : "success"
            }`}
          >
            {create_one_operation_error
              ? "Record doesn`t created"
              : "Record created"}
          </div>
        )}

        {one_operation !== null && (
          <div className="flex f-justify-content-center">
            <p>Cost:</p>
            <p>{one_operation.cost} UAH</p>
          </div>
        )}

        <div className="flex f-justify-content-center">
          <button type="submit">Create</button>
          {one_operation ? (
            <button onClick={saveButtonHandler}>Save</button>
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  )
}

export default Form
