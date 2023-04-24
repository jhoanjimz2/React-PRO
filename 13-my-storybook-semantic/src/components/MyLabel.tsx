import './mylabel.css';

export interface MyLabelProps {
   /**
   * Este es el mensaje a mostrar en la etiqueta
   */
  label: string;
  /**
  * Este es el tamaño de la etiqueta
  */
  size: 'normal' | 'h1' | 'h2' | 'h3';
  /**
  * Esta es la capitalización de la etiqueta
  */
  allCaps: boolean;
  /**
  * Este es el color de la etiqueta
  */
  color: 'primary' | 'secondary' | 'tertiary';
  /**
  * Color personalizado de la fuente
  */
  fontColor?: string;
  /**
  * Color personalizado de la fuente
  */
  backgroundColor?: string;
}

export const MyLabel = ({ 
  allCaps = false,
  color   = 'primary',
  label   = 'No Label',
  size    = 'normal',
  fontColor,
  backgroundColor = 'transparent'
}: MyLabelProps) => {
  return (
    <span 
      className={`label ${ size } text-${ color }`}
      style={{ color: fontColor, backgroundColor }}
    >
      { allCaps ? label.toUpperCase() : label }
    </span>
  )
}

export default MyLabel;