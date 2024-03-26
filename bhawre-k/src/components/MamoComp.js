import React from 'react';

function MamoComp({name}) {
  console.log("Memo component")
  return (
    <div>
      {name}
    </div>
  );
}

export default React.memo(MamoComp);
