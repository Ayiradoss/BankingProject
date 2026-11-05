
function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-logo">B</div>

        <div>
          <h2>BankSphere</h2>
          <p>Digital Banking</p>
        </div>
      </div>

      <p className="sidebar-heading">MENU</p>

      <nav className="sidebar-nav">
        <a href="#dashboard" className="nav-link active">
          <span>▦</span>
          Dashboard
        </a>

        <a href="#products" className="nav-link">
          <span>▤</span>
          My Products
        </a>
      </nav>

      <div className="sidebar-bottom">
        

        <div className="sidebar-user">
          <div className="avatar">AD</div>

          <div>
            <h4>Ayira Doss</h4>
            <p>Personal Account</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
