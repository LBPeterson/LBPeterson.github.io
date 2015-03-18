//For the record, I realize this is not an ideal way of doing this
//I figure it is a bit more lightweight than having an html page for
//each section.

function about() {
  var body = "<p>I am a student at the University of Minnesota - Twin Cities " +
   "persuing a major in computer science. My goal is to graduate in May 2016 " +
   "with an emphasis on Geographical Information Systems.</p>" +
   "<p>I grew up in southern Wisconsin and enjoy being outdoors. "+
   "Running, climbing, and biking are all activities that I participate in here in Minnesota.";

  document.getElementById("dynamic").innerHTML=body;
}

function personal() {
  var body = "<h3>Community Engagement</h3>" +
  "<ul>" +
    "<li>Finalist in the Co-Lab OpEx Innovation Contest. I developed and presented " +
      "a plan to improve bicycle-pedestrian interaction " +
      "at the University of Minnesota.</li>" +
    "<li>Regular volunteer for CSE career fairs and UMN homecoming.</li>" +
    "<li>I volunteer several hours per week for the Science and Engineering " +
      "Student Board and their various events; including card making for " +
      "children at the Masonic Childrens Hospital, Fundraisers like the " +
      "Freezin' for a Reason 5k, and more.</li>" +
    "<li>I volunteered more than 100 hours to be a UMN Welcome Week Leader.</li>" +
    "<li>Was a TA in the College of Science and Engineering for CSE 1001.</li>" +
    "<li>Currently a CSE First year mentor and CSE International Ambassador.</li>" +
  "</ul>" +

  "<h3>Personal Growth</h3>" +
  "<ul>" +
    "<li>Attended LeaderShape leadership training seminar.</li>" +
    "<li>Experienced Scandiavia for several months studying sustainability, eco-tourism, and extreme sports.</li>" +
    "<li>I'm crazy (I enjoy running marathons).</li>" +
    "<li>Past Representative at Badger Boys State.</li>" +
  "</ul>" +

  "<h3>Student Groups</h3>" +
  "<ul>" +
    "<li>Current webmaster and officer of the " +
      "<a href='http://www.umnsesb.org' target='_blank'>Science and Engineering Student Board</a></li>" +
    "<li>Member of the UMN ACM chapter</li>" +
  "</ul>";

  document.getElementById("dynamic").innerHTML=body;
}

function resume() {
  var body = "<object id='resume' data='Peterson_Luke_Resume.pdf' type='application/pdf'>" +
    "<p>It appears you don't have a PDF plugin for this browser.</p>" +
    "<p><h4><a href='Peterson_Luke_Resume.pdf' target='_blank'>Download my resume here instead.</a></h4></p>" +
  "</object>";

  document.getElementById("dynamic").innerHTML=body;
}

function contact() {
  var body = "<p>Luke Peterson" +
    "<br>19-27th Ave SE" +
    "<br>Apt 202" +
    "<br>Minneapolis, MN 55414" +
  "</p>" +
  "<p>pete9348@umn.edu" +
  "<br>612 245 9863</p>";

  document.getElementById("dynamic").innerHTML=body;
}
