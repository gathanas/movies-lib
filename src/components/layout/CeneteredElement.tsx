interface CenteredElementProps {
    children: React.ReactNode;
}

const CenteredElement:React.FC<CenteredElementProps> = ({children}) => {


    return (
        <div className="centered-element">
           {children}
        </div>
    );

}

export default CenteredElement;