import './styles.css';

interface SideBarProps {
  onClick?: () => void;
}

export function Sidebar({ onClick }: SideBarProps) {
  return (
    <div className="sidebar">
      <span>LISTAGEM GERAL</span>
      <nav>
        {Array.from({length: 60}, (_, i) => i + 1).map(e => {
          return (
            <a
              href={`/plants/${e}`}
              onClick={onClick}
            >
              Planta {e}
            </a>
          )
        })}
      </nav>
    </div>
  );
}