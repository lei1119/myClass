<?php
$con = mysql_connect("localhost","root","");

if (!$con)
{
  die('Could not connect: ' . mysql_error());
}
else {
 	mysql_select_db("baiduNews", $con);
 	$type = $_REQUEST["type"];
  $sql;
  if($type == 0) {
    $sql = "SELECT * FROM `news`";
  }
  else{
    $sql = "SELECT * FROM `news` WHERE type=".$type;
  }
  mysql_query("set names 'utf8'");
  $result = mysql_query($sql, $con);
  $arr = array();
  while ($row = mysql_fetch_array($result))
  {
    array_push($arr, array("newsId"=>$row['newsId'], "newsTitle"=>$row['newsTitle'], "newsImage"=>$row['newsImage'], "newsContent"=>$row['newsContent'], "date"=>$row['date'], "type"=>$row['type']));
  }
  $newsResult = array('result'=>0, 'news'=>$arr);
  echo json_encode($newsResult);
}
mysql_close($con);
?>