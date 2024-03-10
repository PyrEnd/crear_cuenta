import Formulario from "./Formulario"
import Alert from "./Alert"

const Registro = ({alert, setAlert}) => {
  console.log(alert);
  return (
    <>
      <Formulario setAlert={setAlert} />
      {alert.msg !== "" && <Alert alert={alert}/>}
    </>
  )
}

export default Registro
