function Sidebar() {
    return (
        <>
<div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay"></label>
      <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        {/* <!-- Sidebar content here --> */}
        <li><a href="dashboard.html"> <i class="material-icons">home</i> Início</a></li>
        <li><a href="contatos.html"><i class="material-icons">group</i> Listar Contatos</a></li>
        <li><a href="novocontato.html"><i class="material-icons">add</i>Novo Contato</a></li>
        <div class="divider"></div>
        <li><a href="index.html" class="text-error"><i class="material-icons"></i> Sair</a></li>

      </ul>
    </div>
        </>
    )
}

export default Sidebar;