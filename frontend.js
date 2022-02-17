
function onEdit()
{
  const v1 = variable();
  motordata();
  generaldata();
  servicematerial();
  dropdown();
  
}

function n1()
{
  const v2 = variable();
  v2.atsheet.setActiveSheet(v2.atsheet.getSheetByName(v2.atss[1]), true);

};


function b1()
{
  const v3 = variable();
  v3.atsheet.setActiveSheet(v3.atsheet.getSheetByName(v3.atss[0]), true);
};

function submit()
{
  submitfinal();
};

