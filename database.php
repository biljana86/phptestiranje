<?php class Database
{
private  $db_host = "localhost"; 
private $db_user = "root"; 
private $db_pass = ""; 
private $db_name = "korisnici"; 
public $con;
public function connect()
    {
        if(!$this->con)
        {
            $myconn = mysql_connect($this->db_host,$this->db_user,$this->db_pass)or die(mysql_error());
            if($myconn)
            {
                $seldb = mysql_select_db($this->db_name,$myconn)or die(mysql_error());
                if($seldb)
                {
                    $this->con = true; 
                    return true; 
                } else
                {
                    return false; 
                }
            } else
            {
                return false; 
            }
        } else
        {
            return true; 
        }
    }
  public function disconnect()
{
    if($this->con)
    {
        if(mysql_close())
        {
          $this->con = false; 
            return true; 
        }
        else
        {
            return false; 
        }
    }
}


 public function select($table, $where =null, $order =null)
    {
        $q = 'SELECT * FROM '.$table;
        if($where != null){
            
            $q .= ' WHERE ';
        foreach ($where as $key => $value) {
            
        
            $q.=$key."='".$value."'";
            
        }
        $q.=";";}
        if($order != null)
            
            foreach ($order as $key => $value) {
            
        
            $q.=' ORDER BY '.$key." ".$value;
            
        }
          
      
        $query = mysql_query($q)or die(mysql_error());
        if($query)
        {
          
                    
            return $query; 
        }
        else
        {
            return false; 
        }
        
  
    }

    
  public function insert($table,$values,$rows = null)
    {
        
            $insert = 'INSERT INTO '.$table;
            if($rows != null)
            {
                $insert .= ' ('.$rows.')'; 
            }
 
            for($i = 0; $i < count($values); $i++)
            {
                if(is_string($values[$i]))
                    $values[$i] = '"'.$values[$i].'"';
            }
            $values = implode(',',$values);
            $insert .= ' VALUES ('.$values.')';
            $ins = mysql_query($insert);            
            if($ins)
            {
                return true; 
            }
           
        
    }
  
}
?>