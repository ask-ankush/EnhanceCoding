
import Copyright from './copyright'
import FooterMain from './footermain'

const Footer = ({ showFooterMain = true }: { showFooterMain?: boolean }) => {
    return (
        <footer className="bg-white relative z-10 overflow-hidden">
            {showFooterMain && <FooterMain />}
            <Copyright />
            {/* Visual background decorations for footer */}
        </footer>
    )
}

export default Footer
