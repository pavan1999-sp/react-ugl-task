import './mhistory.css'
import { createTheme, DetailsList, DetailsRow, getTheme, IDetailsListProps, IDetailsRowStyles, ITextFieldStyles, loadTheme } from '@fluentui/react';
import { Customizer } from '@uifabric/utilities';



const theme = getTheme();


let _onRenderRow: IDetailsListProps['onRenderRow'] = props => {
  const customStyles: Partial<IDetailsRowStyles> = {};
  if (props) {
    if (props.itemIndex % 2 === 0) {
      // Every other row renders with a different background color
      customStyles.root = { backgroundColor: '#333333' };
    }

    return <DetailsRow {...props} styles={customStyles} />;
  }
  return null;
};




const transparentTheme = createTheme({


  palette: {

    neutralPrimary: "white",
    neutralSecondary: "white",
    white: '#26262d',                 // used for default background color
    neutralLighter: 'none',        // used for hover background color
    neutralLight: 'none',          // used for selected background color
    neutralQuaternaryAlt: 'none',   // used for selected hover background color

  }
});

loadTheme(transparentTheme);
// const textFieldStyles: Partial<ITextFieldStyles> = { root: { width:'100%'} };

function DetailsListtask(props: any) {
  console.log("jjjjj")
console.log(props)
  return (


      <div className="details-list">
        
        
     <h4>{props.item.str}</h4>
        <hr />
      <DetailsList className="m-list"
          items={props.item.items}
          columns={props.clm}
          // styles={textFieldStyles}
          selectionMode={0}
          onRenderRow={_onRenderRow}
          checkButtonAriaLabel="Row checkbox"

        />

        
        

        </div>
  


    // <div className="maintainence ">

    //   <div className="d-list">


    //     {/* <Customizer settings={{ theme: transparentTheme }}> */}
    //     <DetailsList className="m-list"
    //       items={props.item.items}
    //       columns={props.clm}
    //       // styles={textFieldStyles}
    //       selectionMode={0}
    //       onRenderRow={_onRenderRow}
    //       checkButtonAriaLabel="Row checkbox"

    //     />

    //     {/* </Customizer> */}

    //   </div>
    // </div>
  );

}
export default DetailsListtask;