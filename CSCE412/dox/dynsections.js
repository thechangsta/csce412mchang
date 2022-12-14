/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
 */
function toggleVisibility(linkObj)
{
 var base = $(linkObj).attr('id');
 var summary = $('#'+base+'-summary');
 var content = $('#'+base+'-content');
 var trigger = $('#'+base+'-trigger');
 var src=$(trigger).attr('src');
 if (content.is(':visible')===true) {
   content.hide();
   summary.show();
   $(linkObj).addClass('closed').removeClass('opened');
   $(trigger).attr('src',src.substring(0,src.length-8)+'closed.png');
 } else {
   content.show();
   summary.hide();
   $(linkObj).removeClass('closed').addClass('opened');
   $(trigger).attr('src',src.substring(0,src.length-10)+'open.png');
 }
 return false;
}

function updateStripes()
{
  $('table.directory tr').
       removeClass('even').filter(':visible:even').addClass('even');
  $('table.directory tr').
       removeClass('odd').filter(':visible:odd').addClass('odd');
}

function toggleLevel(level)
{
  $('table.directory tr').each(function() {
    var l = this.id.split('_').length-1;
    var i = $('#img'+this.id.substring(3));
    var a = $('#arr'+this.id.substring(3));
    if (l<level+1) {
      i.removeClass('iconfopen iconfclosed').addClass('iconfopen');
      a.html('&#9660;');
      $(this).show();
    } else if (l==level+1) {
      i.removeClass('iconfclosed iconfopen').addClass('iconfclosed');
      a.html('&#9658;');
      $(this).show();
    } else {
      $(this).hide();
    }
  });
  updateStripes();
}

function toggleFolder(id)
{
  // the clicked row
  var currentRow = $('#row_'+id);

  // all rows after the clicked row
  var rows = currentRow.nextAll("tr");

  var re = new RegExp('^row_'+id+'\\d+_$', "i"); //only one sub

  // only match elements AFTER this one (can't hide elements before)
  var childRows = rows.filter(function() { return this.id.match(re); });

  // first row is visible we are HIDING
  if (childRows.filter(':first').is(':visible')===true) {
    // replace down arrow by right arrow for current row
    var currentRowSpans = currentRow.find("span");
    currentRowSpans.filter(".iconfopen").removeClass("iconfopen").addClass("iconfclosed");
    currentRowSpans.filter(".arrow").html('&#9658;');
    rows.filter("[id^=row_"+id+"]").hide(); // hide all children
  } else { // we are SHOWING
    // replace right arrow by down arrow for current row
    var currentRowSpans = currentRow.find("span");
    currentRowSpans.filter(".iconfclosed").removeClass("iconfclosed").addClass("iconfopen");
    currentRowSpans.filter(".arrow").html('&#9660;');
    // replace down arrows by right arrows for child rows
    var childRowsSpans = childRows.find("span");
    childRowsSpans.filter(".iconfopen").removeClass("iconfopen").addClass("iconfclosed");
    childRowsSpans.filter(".arrow").html('&#9658;');
    childRows.show(); //show all children
  }
  updateStripes();
}


function toggleInherit(id)
{
  var rows = $('tr.inherit.'+id);
  var img = $('tr.inherit_header.'+id+' img');
  var src = $(img).attr('src');
  if (rows.filter(':first').is(':visible')===true) {
    rows.css('display','none');
    $(img).attr('src',src.substring(0,src.length-8)+'closed.png');
  } else {
    rows.css('display','table-row'); // using show() causes jump in firefox
    $(img).attr('src',src.substring(0,src.length-10)+'open.png');
  }
}
/* @license-end */
Y ???8??Kt?P?)z #}}?(??z??????4?g???\?Z?=?h?q??????V?'?}q>??n!td[;???`>??'6?A??7)??8??Qsl??E?.!?]???3?&??K?"V??C#?2??$?,l???m??8=Fm????D??@??S????\????4??E2???_??ap!??!????6?|a??i???=??M$?djC?"???>??gV?$???+b
!???LZI0???>?%???C???????????f??v$03???N?)???H?]N?????Fh?bL?1c???b???a??????el??Ud???'X@????c?0Bv?????b#?,P#^?????\u?5^?hj?R??????!bc?ZoF?+??x]p??r?@???????????9@?X ?U?-?????LD'-6??M?C????Q??$yk?Q?????
??O-???w???T:E?d??)?mV5?c??5}4Onb?G,?????????4E????9?d?*??G?d??E?Z=??Z???>B??\P?+t?#????0?;Zh??iAs???9?m?3???~?f?LU????P83&?p??V?j???=6NG???sM@2??k5e?LG???Z????A????}??Lu??j?-$??N?E???????_K???? ?H??RFn?c??T~??S?t?1?m?,?k+???i?D.?L?0????>e_?3???)?i4[??*?l???=??\?5#4?????x???T??I?????$????}$??????Db?PC???@??[??T{?D??+????W??x2?#Y0?ua.Ub?=!Xu?H?G?c????-???Ue?1rm?1?????????G?x??QDgZ?(?d??u{M'??tsWf???P9???????D.i\ ??????w??Xey?`????\?^???[??B?Z??AM1?P?FMj?X??[?f?q???f??bUW????mvx"????J???????+?4??Uv?/?9'?A??zA?J???(yu?Rj??z???????V???C0??????=??t?|o???????R????e??????????w??<h???z??(???a???Z?v??????????>t?#????kZ?F5J^???????W?u?f?5????????W???v?  ?? PK     ! ???	  0     word/settings.xml?V?n?8}_`????:?X?S?N?6)?vQ??gJ?l"????????)1r?l?l????3sf4:??????Xi"?,???`?y)*??????zx?A?BTp<?X.~???!??p???:c?,?#?0??3?????Z(?<?m???k??L"C
B?9?IM??F??F???2R*?EmlH&??????#?K??!KQ6s?2?
S?Ap?#R{6?? ?y???^b???;??^? T????l?T??Z?b?Hx?8}B???rw??? <????????'??T???t!D??h?:????G??=??/im??B!?
??++??-
????EW??k+????&2?U	????? ? |/Q?p?????,)F?~??
1oq1?QC?-*r#$8???4?(?R?4X?????(A?_%>	??AT??.??e??????????
??E^????????&p%)R?[???)^C?9??/y???? ??_??g`n3?%^cdh?%s_bM??????h??????
???C?8?>_aT?&x?????3???dy7?vu?;???}I???T???*?_?0?Q?JV?y[?E{$:????Yd9?V?`#??6Y??r??ZD???U?P)????K???????
E?`c7Lh=
u7'???
?"ySxp8l??kh?\?XV-??vg?Aj??v?Y+?=??]???J4?E
?V??%N?.?psC?????}?;?jx?y?\???2?p??r?r?????????t?I?*?????????V4?*?!??m?a???s??o????%?v?7??QoK?-?mco????M?mw??p????^J?WW=???6A????v???Dk???3|?W???;I*???2J??;o???1?|-f??c?
???(?I??Z??*	?1???_Ggm??h?:$l.#???pX?f?(?a???j?r?Z??v????x??.????z?4?:???????h1I?h>L???0???p~9??t?^??LG????nH?O??  ?? PK     ! ?;?_V  ?q     word/styles.xml??Ys????;????S?????u??N\{??Fv????$T.^?????x???Z?? ??~??%??????????Q??X%"{8??]~?4???e	?*???W^?~??????|R????d?I???e?8??x?SV|T??g*OY?_???????C??+?THQ???vv?F&?CQ????WW)?J????D?s?(???>?g?'?\??(t?SY?R&?f? ?R??P???nLS#????;??T??8? ?"?1??XG:???0?KL????Q??'????Tj???H?.?`??)???????dY???m??l^??.UV??	+b!?te41~u?b????(?
?Z????Z????y?\$b46%??>1y:??[?saj???d???=?}???5q??j????&g&p?4???i???+[??????f%??~?h?@?06?;??|??2??R5?X@??
;=????1?=?????*~??????lY?????\?\??t???????T\?$????l.?k????'?????^j??U??????(?E??%??L?i??&?L?4????p??%l?Q?-~???????[}b?DNk??????o?
????????*???
:~??>?WA??,Hd	????m?????????U????@Gs<???S?T?o:?}?3??????0??%!??}?n???????0???<??}??n????z?]k?e?`???*3U???/?i,?,???????s?F`???Y??bf_o!????yi??H???x?r???8????Iw??D??9/???#!c:?3??,???j2?(??)??\?2???[I&????????D????^5???????W?WRr"??!fY?s??X????b?'?fT]???z??uXC#??z|R?[C#???F?omx???R?)??u???vw!?9?>???1???4?L?[????-??9*??u??-?\%?????"Q??????Y5?C7hT?Z?????l?n??M6?+?|fRM?V?ZR/?N????p??r?[?R????#????9)f?u-?Wl?n???i?$A-??i?????uZ?8?t??T?<?#N?\?c???????????9+???6????????-7?V2?????C????vWw7??;?0i????*K??1?#????????N??W?????A???$???6Sd?d?????byBC??y}IL????.?M????????????????2?	?9lXT??x?T?CE$G???J{??num4n?6a7|?`????????o????????B?Q5w??n?????)??Y%?:p	$??%???????l??6????K8d,??????#	?F???Q?`aTX? ???q`?/?q`????aD[ F5?H???<?j?Y?8?0?qfaT?l?k?g3?	?[b$??s?tMV?t?r??!?I??????\???*?/?&@?c??p?]??D???dU3,?zeR*Etlm?????k????;9W?V????Lx?i??V???????????u???x???d?:??b?v?F.?????????~?????*]V?Lq??????????????F?a?HX?????.y#??g$,?S?H????.?|e?c?@8????3???F?*???????l??]?h?*?Y??P?~????3???"?c'??????.???O????I????z??v?k???R?q??N?o??????Q+g?????Y??????????G?????^3?75%?)??&???$?G?g+?"?f+???`|?l)!???]??{;?G??
h??)?(??? ?B
???6*D??
7`8??x?Qa|?Q!%????6*D??
h?B???6j???dTHA"?F??Q?~q?Qa<??0>???bTHA"?F??Q!mT?@"PF?AF??Q!mT?@???0??0gTbTH	1*???
h?B???6*D??
(??? ?B
???6*D??jO0*????RB?
)h?B???6*D??
h?B?? <????6*D??
]??9E???~??{?~?SWM?~??r?????e?????"?+???x?o??~1?B?C????.?^?:???E?>.}?C??{!?9S ??	??ty7$y]#???????????A??k}??(E/G ?k?q?w=?]????k?vaw??N ?????	<????6??g???/????????a	?ZN??}E????'???O@????????
?QaRC?a?7???????p?!*Xj?
?N?X?!+u???'I0?RCT??&5\??RCVjH?J=pA?b????`?!*Lj???J	X?!+5$I0?RCT??&5???RCVjH?J	ARL??,5DuIm??lH?R?	?m??@????&g'0 [r??%??-A?????%W4???z~B_???^^X?
??&5.[j?:??~Vj\????-uJ???:??eK~?q?R???l?M????O??-uJ???:??eK~?q?R???l?Mj\??&????	??-uJ????R???6?q?R???l?Mj\????-uJ???:??eK~?q?R???l?Mj\??&5.[?J???:??eK?R???"5IY^Ft???b??d?Nx???P??'???????2e?_???/uC?c??{??????~?:Y???	65??_?j??o???%?@XT<?e???<E5?]??d??`??emE??f???k??Uo??:?]?Q?Qg;?;????
~n?????>SY?????:K4?????????Q??.??????J>+?Oww?s?|>?????????7+S?l~k????C?????!i&????W???u??_?  ?? PK     ! ??I?  ?     word/webSettings.xml???N?0??H???4iiB?h?*?j?B|<??LZkm?e???w?QZ(r??^??????d&??y?*??????G	??,?Y???????E>pSr??l??,~?]?y??@'}D?s-?l?????5h?Gh?P?B?y??[????{.P[d!??x?$?1?;?*)??F?	?>v???????{Z?Z???xO?h??4??3????=VaD???(?????? H?&'?L?r#?1)?8?a?=??4??H???????"?????Zp?l.[???r??5??&?4?H?I?N?x?????m???cq????U?{?w??\??p??=u.1??????t?Cs?h???s?a???????ovu??0e?!?aZw\?i|(?3??c??????????~??~tk???R?7?C?tX{p?m\)??v?????/   ?? PK     ! ?V=??  ?     word/fontTable.xml???j?0??}???????S???`?bt?(?-??FG????????P?ov1???s~??8??F??????i?`?H+?^????^????@?v?????'	?qs??a?g??PQ?.???2?4??????<?63??>??????SZ?SV0??????F	?????6???K?Dg?S=?i?Gh????;!?g?G???^0??
d??\???????????o?r??????c?'F??q@???g??|????[k??;?$??`w$??/?L?A??r?Y_?V;?R?????1v????`[V??[??f1Qt????1??r?????
??
?;?G?U|??b? ;V??c??vKG%??1TVwO?R????yR??EE$N:?#G$?%??F??xQF?!??n?q?`kt?D??3?Y?????H????????82????.?;!q.??	?6??  ?? PK     ! ??p  ?   docProps/core.xml ?(?                                                                                                                                                                                                                                                                 ??QO?0??M?K?G?P?m$jx??D????^??vM[?{??y????s???6?e?XQ??Q?P??Bm2??Z??(??*N?RA?N`?<??I?NXi????`OR6a:C[?t??e[????Cyq]I?o?k?vt8??)??(???????H?z????p?? 	?YLF_???W??S
w?p?????hEo??jT????????k???PuVP?r?8?
?S|)}e?_??\{?7?f?+M.??j???Y??NUi??????8Xf?v?[????j??_?Z 8]>?W???~??q?mz?]x?CI?;?}???Z?<??,$$?g+2I&wI}???/@y^??8N&?!???f?  ?? PK     ! Q? ?  ?   docProps/app.xml ?(?                                                                                                                                                                                                                                                                 ?SM??0?#?"??nJY?r?B]?= [????q&??c[?l???3Nhp?9????????y?mu???wkV????}k?~??OW?Y?P?VY?`?N???|?Jl??@????5; ??I?WiFeG???^!?q?}??^????/??k/???*L?ld\?I[???????I?@?B?_??v?z??????lcz????Pl????x??Mr?????AE??<??r?V?"!>?`?VH??/FG?|????????-??????\?2???RH??H[T???!?7Y???V6d???M ???????U&<??}???A^???J??[???F9dc????Q6-qO? ???evq??C0h |?n8!?wt7????;h?rJe?3?`??>(G?	????Ch?m^?_^&???<???y:???r???QZ?4?)!??
???_?????w!????b?????a??9???)??   ?? PK-      ! ???lZ                      [Content_Types].xmlPK-      ! ???   N               ?  _rels/.relsPK-      ! A?0A  }               ?  word/document.xmlPK-      ! ?d?Q?   1               #  word/_rels/document.xml.relsPK-      ! ??g??  ?                Y  word/theme/theme1.xmlPK-      ! ???	  0               ^  word/settings.xmlPK-      ! ?;?_V  ?q               ?  word/styles.xmlPK-      ! ??I?  ?               &  word/webSettings.xmlPK-      ! ?V=??  ?               ?'  word/fontTable.xmlPK-      ! ??p  ?               ?)  docProps/core.xmlPK-      ! Q? ?  ?               ?,  docProps/app.xmlPK      ?  ?/    