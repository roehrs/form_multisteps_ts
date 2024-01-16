type UserProps = {
    data: {
        name: string;
        email: string;
    };
    updateFieldHandle: (key: string, valu:string) => void;
}

const UserForm = ({data, updateFieldHandle}:UserProps) => {
  return (
    <div>
    <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input type="text" name="name" id="name" placeholder="Digite seu nome" required value={data.name || ""} onChange={(e) => updateFieldHandle("name", e.target.value)}/>
    </div>
    <div className="form-control">
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" placeholder="Digite seu email" required value={data.email || ""} onChange={(e) => updateFieldHandle("email", e.target.value)}/>
    </div>
    </div>
  )
}

export default UserForm;