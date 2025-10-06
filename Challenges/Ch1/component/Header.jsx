import claudeFace from "../../../src/assets/chef-claude-icon.png";
export default function Header()
{
    return(
        <header>
            <div className="outer-container">
                <img src={claudeFace}/>
                <div className="text-container">
                    <p className="header-text">Chef Claude</p>
                </div>
            </div>
        </header>
    )
}