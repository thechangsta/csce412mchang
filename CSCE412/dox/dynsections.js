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
Y ���8��Kt�P�)z #}}�(��zش����4�gޏ�\�Z�=�h�q랮���V�'�}q>��n!td[;���`>��'6�A��7)��8��Qsl��E�.!�]�Ȉ3�&ҹK�"V��C#�2��$�,l�߆m��8=Fm����D��@ԦSÌ��\����4��E2���_�ap!��!����6�|aнi���=��M$�djC�"���>��gV�$���+b
!���LZI0�>�%��C���ې���f��v$03��N�)���H�]N��ћ�Fh�bL�1c�ܾbó�a�����el��Udƪ�'X@����c�0Bv�����b#�,P#^�����\u�5^�hj�R�ա���!bc�ZoF�+��x]p��r�@���������ζ9@�X �U�-݂���LD'-6��M�C����Q��$yk�Q�����
��O-�өw���T:E�d��)�mV5�c��5}4Onb�G,г�欦���4E����9�d�*��G�d��E?Z=��Z�§>B�\P�+t�#�쏇0�;Zh��iAs���9�m�3���~�f�LU����P83&�p��V�j���=6NG���sM@2��k5e�LG���Z���A늀�}��Lu��j�-$��N�E�¢����_K���� �H��RFn�c�T~��S�t�1�m�,�k+���i�D.�L�0����>e_�3���)�i4[��*�l���=��\�5#4����x���T��I�ɥ�?$�̸�}$������Db�PC���@��[��T{�Dɵ+����W��x2�#Y0�ua.Ub�=!Xu�H�G�c���-��Ue�1rm�1��ά����G�xߒQDgZ�(�d��u{M'��tsWf���P9�ķ�ۅ�D.i\ �ִ珏w��Xey�`����\�^庢[��B�Z��AM1�P�FMj�X�[�f�qڷ�fԪbUW��֋mvx"���J��¯���+�4��Uv�/�9'�A��zA�J��?(yu�Rj��z�������V���C0��⪟�=��t�|o�Ƿ��ǫR�܈�e������w��<hԆ�z��(���a���Z�v���������>t�#����kZ�F5J^���ڥ�W�u�f�5�������W�ռv�  �� PK     ! ���	  0     word/settings.xml�V�n�8}_`����:�X�S�N�6)�vQ��gJ�l"�������)1r�l�l����3sf4:������Xi"�,�Ϣ`�y)*·����zx�A�BTp<�X.~���!��p���:c�,�#�0��3�τ��Z(�<�mȐ�k�L"C
B�9�IM��F̂F�2R*�EmlH&Ꚕ���#�K�!KQ6s�2�
S�Ap�#R{6�� �y���^bϨ�;��^� T���l�T��Z�b�Hx�8}B���rw�� <�������'��T��t!D��h�:����G��=��/imݐB!�
��++��-
ʁ��EW��k+����&2�U	ʁ��� � |/Q�pϴĔ�,)F�~ȶ
1oq1�QC�-*r#$8���4�(�R�4X�����(A�_%>	��AT��.e�����֣�݈
��E^����Ӕ?&p%)R�[���)^C�9��/y��ц ��_��g`n3�%^cdh�%s_bM������h�͒���
���C�8�>_aT�&x�����3���dy7�vu�;���}I���T���*�_�0�Q�JV�y[�E{$:����Yd9�V�`#��6Y��r��ZD˕�U�P)����K�������
E�`c7Lh=
u7'���
�"ySxp8l��kh�\�XV-��vg�Aj��v�Y+�=��]�՟J4�E
�V��%N�.�psC����}�;�jx�y�\���2�p��r�r������ʭt�I�*��Ƴ�����V4�*�!��m�a�Òs��o�ݡ�%�v�7�QoK�-�mco����M�mw��p����^J�WW=���6A���v?��Dk���3|�W���;I*���2J��;o���1�|-f��c�
ԍ�(�I��Z��*	�1?��_Ggm�h�:$l.#���pX�f�(�a���j�r�Z��v���x��.�ݿ�z�4�:̇�����h1I�h>L��0���p~9��t�^��LG���nH�O݋  �� PK     ! �;�_V  �q     word/styles.xml��Ysۺ��;����S��Ȼ�u��N\{��Fv����$T.^�����x��Z�� ��~��%��������ǝQĳX%"{8��]~�4���e	�*㧣W^�~��׿��|R����d�I���e�8��x�SV|T��g*OY�_�����C��+�THQ���vv�F&�CQ����WW)�J?ι�D�s�(���>�g�'�\ż(t�SY�R&�f� �R�P��nLS#���;��T��8� �"�1��XG:���0�KL��Q��'����Tj��H�.�`�)������dY���m޼l^��.UV��	+b!�te41~u�b�?�(�
�Z?��?Z?���y�\$b46%��>1y:��[�saj��d���=�}���5qޚj���&g&p�4���i���+[����f%��~�h�@�06�;��|�2ͪR5�X@��
;=����1�=�?��*~�ɤ���lY�����\�\��t�ٖ�ߜ�T\�$���l.�kγ��'�����^jވU�����(�E��%��L�iƌ&?L�4߮ĺp��%l�Q�-~Ι���ݷ[}b�DNkۙ՛��o�
���ޫ���*��
:~��>�WA��,Hd	����m���������U����@Gs<���S�T�o:�}�3ڻ��׈0��%!��}�n��ø���0���<��}��n����z�]k�e�`�͔*3U��/�i,�,����̢�s�F`ꙭY��bf_o!֤��yi��H͢�x�r���8Ϟ��IwĒD��9/���#!c:�3��,��j2�(��)��\�2���[I&�Հ���ܘD�Ź^5�����W�WRr"��!fY�s��X����b�'�fT]�Јz��uXC#�z|R�[C#귆F�omx�݉R�)��u��?vw!�9�>��1���4�L�[����-�9*ݎuی-�\%��Ś�"Q����ЭY5�C7hT�Z���l�n��M6�+�|fRM�V�ZR/�N����p��r�[�R��ڱ#����9)f�u-�Wl�n���i�$A-��i����uZ�8�t��T�<�#N�\�c͵�����忥�9+�͕6�������-7�V2�����Cʄ��vWw7ߣ;�0i���*K��1�#��ŧ����N��W�֞��A���$���6Sd�d���שbyBC��y}ILɉ��.�M��������ݐ������2�	�9lXT��x�T�CE$G���J{��num4n�6a7|�`��˃����o�������B�Q5wɣn����)��Y%�:p	$��%����Ҭ�l��6���K8d,������#	�F���Q�`aTX� ï�q`�/�q`ïթaD[ F5�H���<�j�Y�8�0�qfaT�l�k�g3�	�[b$՘s�tMV�t�r��!�I���ִ�\�̽*�/�&@�cԒp�]�D�ŧdU3,�zeR*Etlm�����k׶��;9W�V��ϕLx�i�?V�˓����շ��u��x���d�:��b�v�F.���������~�����*]V�Lq��?؎�������F�a�HX�����.y#�g$,�S�H�Ӎ�.?|e�c�@8�?��3���F�*��خ���l��]�h�*�Y��P�~����3�?�"?c'?�����.���O¬�IӖ��z��v�k���R�q��N�o�����Q+g�����Y�ߏ��?����G�����^3�75%�)��&?��$�G�g+�"�f+���`|�l)!�Հ]��{;�G��
h��)�(��� �B
ڨ�6*D��
7`8��x�Qa|�Q!%Ĩ��6*D��
h�Bڨ�6j���dTHA"�F��Q�~q�Qa<Ψ0>Ĩ�bTHA"�F��Q!mT�@"PF�AF��Q!mT�@���0ܨ0gTbTH	1*���
h�Bڨ�6*D��
(��� �B
ڨ�6*D��jO0*��ƇRB�
)h�Bڨ�6*D��
h�Bʨ <Ȩ��6*D��
]�9E��~��{�~�SWM�~��r�����e�����"�+���x�o�~1�B�CԞ��.�^�:���E�>.}�C��{!�9S ?�	��ty7$y]#ݍ�΃��׍��Aפk}��(E/G �k�q�w=�]����k�vaw��N ����	<����6��g?��/��������a	�ZN��}E����'���O@��������
�QaRC�a�7�������p�!*Xj�
�N�X�!+u���'I0�RCT��&5\ʰRCVjH�J=pA�b¥��`�!*Lj���J	X�!+5$I0�RCT��&5Ȓ�RCVjH�J	ARL��,5DuIm��lH�R�	�m@܂��&g'0 [r��%��-A����%W4?��z~B_���^^X?
��&5.[j�:ܨ~Vj\���-uJ�˖:��eK~�q�R�Ըl�M����O��-uJ�˖:��eK~�q�R�Ըl�Mj\��&��ً	��-uJ�˖�R㲥6�q�R�Ըl�Mj\���-uJ�˖:��eK~�q�R�Ըl�Mj\��&5.[�J�˖:��eK�R㲥"5IY^Ftϋ�bżd�Nx��P�'����߬2e�_���/uC�c˝{������~�:Y���	65��_�j޶oα�%�@XT<�e���<E5�]��d��`��emE֣f���k��Uo��:�]�Q�Qg;�;���
~n�����>SY�Ι��:K4��������Q��.������J>+�Oww�s�|>��������7+S�l~k����C�����!i&���W���uݖ_�  �� PK     ! ��I�  �     word/webSettings.xml��N�0��H���4iiB�h�*�j�B|<��LZkm�e���w�QZ(r��^���?�d&��y�*ڂ�͜�G	��,�Y�������E>pSr��l��,~�]�y��@'}D�s-�l���؋5h�Gh�P�B�y��[Ś�?{.P[d!��x�$�1�;�*)��F�	�>v���Ư��{Z�Z���xO�h��4��3����=VaD���(������ H�&'�L�r#�1)�8�a�=��4��H���ʠ�"�����Zp�l.[Є�r��5��&�4�H�I�N�x��m���cq���U�{�w�\��p?�=u.1ԟ��ǲt�Cs�h�ߚs�a�����Ƒovu��0e�!�aZw\�i|(�3?�c�ͮ�˫����~��~tk���R�7�C�tX{p�m\)��v�����/   �� PK     ! �V=��  �     word/fontTable.xmlܒ�j�0��}��Ʋ���S���`�bt�(�-�?FG���ߑ줃P�ov1���s~��8��F������i�`�H+�^ٶ��^����@�vϵ���'	�qs��a�g��PQ�.���2�4�����<�63��>����SZ�SV0�����F	�Չ��6���K�Dg�S=�i�Gh����;!�g�G���^0��
d��\������򜥝�o�r������c�'F��q@�Ôg��|�Ĉ�[k��;�$��`w$��/�L�A��r�Y_�V;�R��ց�1v亦�`[V��[ƕf1Qt܃��1��rÍҧ�
��
�;�G�U|��b� ;V��c��vKG%��1TVwO�RĻ��yR��EE$N:�#G$�%��F��xQF�!��n�q�`kt�D?�3�Y��ĝ�H��ʑ���82����.�;!q.��	�6��  �� PK     ! ��p  �   docProps/core.xml �(�                                                                                                                                                                                                                                                                 ��QO�0��M�K�G�P�m$jx��D�Ʒ�^��vM[�{��y��ޞs�ݝ6�e�XQ��Q�P��Bm2��Z��(��*N�RA�N`�<��I�NXi�Ŕ�`OR6a:C[�t��e[�Ԏ�Cyq]I�o�k�vt8��)��(���ꞈ�H�z�ޛ�p�� 	�YLF_���W�S
w�p�ډ��hEo��jT��ߟ����k�PuVP�r�8�
�S|)}e�_��\{�7�f�+M.��j���Y��NUi������8Xf�v�[����j��_�Z 8]>�W���~��q�mz�]x�CI�;�}���Z�<��,$$�g+2I&wI}֛�/@y^��8N&�!���f�  �� PK     ! Q� �  �   docProps/app.xml �(�                                                                                                                                                                                                                                                                 �SM��0�#�"߷nJY�r�B]�= [��ݳq&��c[�l���3Nhp�9����󛱸y�mu���wkV���}k�~��OW�Y�P�VY�`�N�؍|�Jl��@��¥5; ��I�WiFeG���^!�q�}��^?���/��k/���*L�ld\�I[����؜�I�@�B�_�v�z�����lcz����Pl����x�Mr�����AE��<��r�V�"!>�`�VH��/FG�|��������-�����\�2���RHˈH[T���!�7Y���V6d��M ��ǻU&<��}���A^��J��[���F9dc�؆�Q6-qO� ˶�evq��C0h |�n8!�wt7��غ;h�rJe�3�`��>(G�	����Ch�m^�_^&��?<��y:���r���QZ�4�)!��
���_�����w!����b�ٜ�a��9ڄ�)ɟ   �� PK-      ! ߤ�lZ                      [Content_Types].xmlPK-      ! ���   N               �  _rels/.relsPK-      ! A�0A  }               �  word/document.xmlPK-      ! �d�Q�   1               #  word/_rels/document.xml.relsPK-      ! ��g��  �                Y  word/theme/theme1.xmlPK-      ! ���	  0               ^  word/settings.xmlPK-      ! �;�_V  �q               �  word/styles.xmlPK-      ! ��I�  �               &  word/webSettings.xmlPK-      ! �V=��  �               �'  word/fontTable.xmlPK-      ! ��p  �               �)  docProps/core.xmlPK-      ! Q� �  �               �,  docProps/app.xmlPK      �  �/    