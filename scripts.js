var displayGettingStarted = false;
var displayCustomize= false;
var displayLayout = false;
var displayContents = false;
var displayForms = false;
var displayComponents = false;
var displayHelpers = false;
var displayUtilities = false;
var displayExtend = false;
var displayAbout = false;
var y;

if( (displayGettingStarted == true) || (displayCustomize == true) || (displayLayout == true) || (displayContents == true) || (displayForms == true) || (displayComponents == true) || (displayHelpers == true) || (displayUtilities == true) || (displayExtend == true) || (displayAbout == true) )
{
  document.getElementById('migration').style.backgroundColor= red;
}

window.onscroll = function (e) {
    y = window.scrollY
    console.log(y); // Value of scroll Y in px
};



function displayGS()
{

    displayGettingStarted = !displayGettingStarted;
    console.log('2' , displayGettingStarted);
    if (displayGettingStarted)
    {
        document.getElementById('gettingStarted').style.display = 'block';

    }

    else
    {
        document.getElementById('gettingStarted').style.display = 'none';
    }

    
}

function displayCustom()
{

    displayCustomize = !displayCustomize;
    if (displayCustomize)
    {
        document.getElementById('customize').style.display = 'block';

    }

    else
    {
        document.getElementById('customize').style.display = 'none';
    }

    
}


function displayLO()
{

    displayLayout = !displayLayout;
    if (displayLayout)
    {
        document.getElementById('layout').style.display = 'block';

    }

    else
    {
        document.getElementById('layout').style.display = 'none';
    }

    
}


function display_Content()
{

    displayContents = !displayContents;
    if (displayContents)
    {
        document.getElementById('content').style.display = 'block';

    }

    else
    {
        document.getElementById('content').style.display = 'none';
    }

    
}


function display_Forms()
{

    displayForms = !displayForms;
    if (displayForms)
    {
        document.getElementById('forms').style.display = 'block';

    }

    else
    {
        document.getElementById('forms').style.display = 'none';
    }

    
}


function display_Components()
{

    displayComponents= !displayComponents;
    if (displayComponents)
    {
        document.getElementById('components').style.display = 'block';

    }

    else
    {
        document.getElementById('components').style.display = 'none';
    }

    
}


function display_Helpers()
{

    displayHelpers = !displayHelpers;
    if (displayHelpers)
    {
        document.getElementById('helpers').style.display = 'block';

    }

    else
    {
        document.getElementById('helpers').style.display = 'none';
    }

    
}


function display_Utilities()
{

    displayUtilities = !displayUtilities;
    if (displayUtilities)
    {
        document.getElementById('utilities').style.display = 'block';

    }

    else
    {
        document.getElementById('utilities').style.display = 'none';
    }

    
}


function display_Extend()
{

    displayExtend = !displayExtend;
    if (displayExtend)
    {
        document.getElementById('extend').style.display = 'block';

    }

    else
    {
        document.getElementById('extend').style.display = 'none';
    }

    
}


function display_About()
{

    displayAbout= !displayAbout;
    if (displayAbout)
    {
        document.getElementById('about').style.display = 'block';

    }

    else
    {
        document.getElementById('about').style.display = 'none';
    }

    
}




