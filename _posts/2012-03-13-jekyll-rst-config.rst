---

layout: post

---

jekyll restructuredText配置
============================

jekyll很好用，可惜默认是用markdown的，而我习惯了restructuredText，幸好jekyll支持插件，而刚好有这么一个插件。

jekyll-rst项目：https://github.com/xdissent/jekyll-rst

安装jekyll-rst插件到jekyll（官方说明)：

.. code-block:: console

    $ cd <jekyll-project-path>
    $ git submodule add https://github.com/xdissent/jekyll-rst.git _plugins/jekyll-rst


然后把rst文件放到_posts目录下，使用jekyll编译时就会把rst也转换成html了，文件名的格式和md文件名一样。

但发现一个问题，rst文件中有中文的话，生成html文件为空。没有中文的话就正常。初步判断是编码的问题。

看了看jekyll-rst的代码，发现jekyll-rst后台使用的是rbst，一个ruby包装的restructuredText转换程序，本质上还是使用自带的rst2html.py来转换。

单独使用rbst自带的rst2html.py转换，也没问题，奇怪！

再去rbst的给i他湖边主页转悠，看看Issue里有木有人遇到这种情况，可怜的2个Issue呀。第1个看着像，按照所说的，在transform.py中的 import sys 下面增加两句：

.. code-block:: python

    reload(sys)
    sys.setdefaultencoding('utf-8')

用来重置python的编码方式为utf8，再执行jekyll，果然好了。

现在找到解决方法了，但不优雅。

这不是rbst的问题，而是python设置的问题。

查看pyhton的默认编码：

.. code-block:: console

    $ python -c "import sys;print sys.getdefaultencoding()"
    ascii

果然不是utf8！这下好了，只要设置pyhton默认编码就行了。

可以在site-packages下创建一个文件sitecustomize.py，这个文件会在pyhton启动时加载。把上面的python脚本内容放入这个文件，搞定！

此文是使用jekyll-rst写的第一篇文章。
