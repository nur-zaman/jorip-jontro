function Sidebar() {
  return (
    <>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu w-80 overflow-y-auto bg-base-100 p-4 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <a href="dashboard.html">
              {" "}
              <i className="material-icons">home</i> Início
            </a>
          </li>
          <li>
            <a href="contatos.html">
              <i className="material-icons">group</i> Listar Contatos
            </a>
          </li>
          <li>
            <a href="novocontato.html">
              <i className="material-icons">add</i>Novo Contato
            </a>
          </li>
          <div className="divider"></div>
          <li>
            <a href="index.html" className="text-error">
              <i className="material-icons"></i> Sair
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
