hljs.IDENT_RE_RU = '[a-zA-Zа-яА-Я][a-zA-Z0-9_а-яА-Я]*';
hljs.OneS_KEYWORDS = {'процедура':1,'функция':1,'экспорт':1,'перем':1,'конецфункции':1,'конецпроцедуры':1,'если':1,'тогда':1,'иначе':1,'иначеесли':1,'конецесли':1,'попытка':1,'исключение':1,'конецпопытки':1,'ложь':1,'истина':1,'неопределено':1,'и':1,'или':1,'не':1,'null':1,'для':1,'каждого':1,'из':1,'по':1,'цикл':1,'конеццикла':1};

hljs.LANGUAGES['1c'] = {
  defaultMode: {
    lexems: [hljs.IDENT_RE_RU],
    contains: ['comment', 'string', 'function', 'preprocessor', 'number'],
    keywords: hljs.OneS_KEYWORDS
  },
  case_insensitive: true,
  modes: [
    hljs.C_LINE_COMMENT_MODE,
    {
      className: 'string',
      begin: '"', end: '"',
      contains: ['dquote'],
      relevance: 0
    },
    {
      className: 'string',
      begin: '"', end: '$',
      contains: ['dquote']
    },
    {
      className: 'string',
      begin: '\\|', end: '$',
      contains: ['dquote']
    },
    {
      className: 'string',
      begin: '\\|', end: '"',
      contains: ['dquote']
    },
    {
      className: 'dquote',
      begin: '""', end: '^'
    },
    {
      className: 'number',
      begin: hljs.NUMBER_RE, end: '^',
      relevance: 0
    },
    {
      className: 'title',
      lexems: [hljs.IDENT_RE_RU],
      begin: hljs.IDENT_RE_RU, end: '^'
    },
    {
      className: 'params',
      begin: '\\(', end: '\\)',
      lexems: [hljs.IDENT_RE_RU],
      keywords: {'знач':1},
      contains: ['string']
    },
    {
      className: 'function',
      begin: '(процедура|функция)', end: '$',
      lexems: [hljs.IDENT_RE_RU],
      keywords: {'процедура': 1, 'экспорт':1, 'функция': 1},
      contains: ['title','tail','comment'],      
      relevance: 0
    },
    {
      className: 'tail',
      begin: '^',  endsWithParent: true,
      lexems: [hljs.IDENT_RE_RU],
      contains: ['params', 'export']
    },
    {
      className: 'export',
      begin: 'экспорт', endsWithParent: true, 
      lexems: [hljs.IDENT_RE_RU],
      keywords: {'экспорт': 1},
      contains: ['comment']
    },
    {
      className: 'preprocessor',
      begin: '#', end: '$',
      lexems: [hljs.IDENT_RE_RU]
    }
  ]
};
/*

Axapta definition (с) Dmitri Roudakov <dmitri@roudakov.ru>

*/
hljs.LANGUAGES.axapta  = {
  defaultMode: {
    lexems: [hljs.UNDERSCORE_IDENT_RE],
    contains: ['comment', 'string', 'class', 'number', 'preprocessor'],
    keywords: {'false': 1, 'int': 1, 'abstract': 1, 'private': 1, 'char': 1, 'interface': 1, 'boolean': 1, 'static': 1, 'null': 1, 'if': 1, 'for': 1, 'true': 1, 'while': 1, 'long': 1, 'throw': 1,  'finally': 1, 'protected': 1, 'extends': 1, 'final': 1, 'implements': 1, 'return': 1, 'void': 1, 'enum': 1, 'else': 1, 'break': 1, 'new': 1, 'catch': 1, 'byte': 1, 'super': 1, 'class': 1, 'case': 1, 'short': 1, 'default': 1, 'double': 1, 'public': 1, 'try': 1, 'this': 1, 'switch': 1, 'continue': 1,
    'reverse':1, 'firstfast':1,'firstonly':1,'forupdate':1,'nofetch':1, 'sum':1, 'avg':1, 'minof':1, 'maxof':1, 'count':1, 'order':1, 'group':1, 'by':1, 'asc':1, 'desc':1, 'index':1, 'hint':1, 'like':1,
    'dispaly':1, 'edit':1, 'client':1, 'server':1, 'ttsbegin':1, 'ttscommit':1,
    'str':1, 'real':1, 'date':1, 'container':1, 'anytype':1, 'common':1, 'div':1,'mod':1
    }
  },
  modes: [
    {
      className: 'class',
      lexems: [hljs.UNDERSCORE_IDENT_RE],
      begin: '(class |interface )', end: '{',
      illegal: ':',
      keywords: {'class': 1, 'interface': 1},
      contains: ['inheritance', 'title']
    },
    {
      className: 'inheritance',
      begin: '(implements|extends)', end: '^',
      lexems: [hljs.IDENT_RE],
      keywords: {'extends': 1, 'implements': 1},
      relevance: 10
    },
    {
      className: 'title',
      begin: hljs.UNDERSCORE_IDENT_RE, end: '^'
    },
    {
      className: 'params',
      begin: '\\(', end: '\\)',
      contains: ['string', 'annotation']
    },
    hljs.C_NUMBER_MODE,
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    hljs.BACKSLASH_ESCAPE,
    hljs.C_LINE_COMMENT_MODE,
    hljs.C_BLOCK_COMMENT_MODE,
    {
      className: 'preprocessor',
      begin: '#', end: '$'
    }
  ]
};
/*

Bash Scripts by vah <vahtenberg@gmail.com>

*/
hljs.BASH_LITERAL = {'true' : 1, 'false' : 1}
hljs.LANGUAGES.bash = {
  defaultMode: {
    lexems: [hljs.IDENT_RE],
    contains: ['string', 'shebang', 'comment', 'number', 'test_condition', 'string', 'variable'],
    keywords: {
      'keyword': {'if' : 1, 'then' : 1, 'else' : 1, 'fi' : 1, 'for' : 1, 'break' : 1, 'continue' : 1, 'while' : 1, 'in' : 1, 'do' : 1, 'done' : 1, 'echo' : 1, 'exit' : 1, 'return' : 1, 'set' : 1, 'declare' : 1},
      'literal': hljs.BASH_LITERAL
    }
  },
  case_insensitive: false,
  modes: [
    {
      className: 'shebang',
      begin: '(#!\\/bin\\/bash)|(#!\\/bin\\/sh)', 
      end: '^',
      relevance: 10
    },
    hljs.HASH_COMMENT_MODE,
    {
      className: 'test_condition',
      begin: '\\[ ', 
      end: ' \\]',
      contains: ['string', 'variable', 'number'],
      lexems: [hljs.IDENT_RE],
      keywords: {
        'literal': hljs.BASH_LITERAL
      },
      relevance: 0
    },
    {
      className: 'test_condition',
      begin: '\\[\\[ ', 
      end: ' \\]\\]',
      contains: ['string', 'variable', 'number'],
      lexems: [hljs.IDENT_RE],
      keywords: {
        'literal': hljs.BASH_LITERAL
      }
    },
    {
      className: 'variable',
      begin: '\\$([a-zA-Z0-9_]+)\\b', 
      end: '^'
    },
    {
      className: 'variable',
      begin: '\\$\\{(([^}])|(\\\\}))+\\}', 
      end: '^',
      contains: ['number']
    },
    {
      className: 'string',
      begin: '"', end: '"',
      illegal: '\\n',
      contains: ['escape', 'variable'],
      relevance: 0
    },
    {
      className: 'string',
      begin: '"', end: '"',
      illegal: '\\n',
      contains: ['escape', 'variable'],
      relevance: 0
    },
    hljs.BACKSLASH_ESCAPE,
    hljs.C_NUMBER_MODE,
    {
      className: 'comment',
      begin: '\\/\\/', end: '$',
      illegal: '.'
    }
  ]
};

/*

Unified and context diff definition (c) Vasily Polovnyov <vast@whiteants.net>

*/
hljs.LANGUAGES.diff = {
  case_insensitive: true,
  defaultMode: {
    contains: ['chunk', 'header', 'addition', 'deletion', 'change']
  },
  modes: [
    {
      className: 'chunk',
      begin: '^\\@\\@ +\\-\\d+,\\d+ +\\+\\d+,\\d+ +\\@\\@$', end:'^',
      relevance: 10
    },
    {
      className: 'chunk',
      begin: '^\\*\\*\\* +\\d+,\\d+ +\\*\\*\\*\\*$', end: '^',
      relevance: 10
    },
    {
      className: 'chunk',
      begin: '^\\-\\-\\- +\\d+,\\d+ +\\-\\-\\-\\-$', end: '^',
      relevance: 10
    },
    {
      className: 'header',
      begin: 'Index: ', end: '$'
    },
    {
      className: 'header',
      begin: '=====', end: '=====$'
    },
    {
      className: 'header',
      begin: '^\\-\\-\\-', end: '$'
    },
    {
      className: 'header',
      begin: '^\\*{3} ', end: '$'
    },
    {
      className: 'header',
      begin: '^\\+\\+\\+', end: '$'
    },
    {
      className: 'header',
      begin: '\\*{5}', end: '\\*{5}$'
    },
    {
      className: 'addition',
      begin: '^\\+', end: '$'
    },
    {
      className: 'deletion',
      begin: '^\\-', end: '$'
    },
    {
      className: 'change',
      begin: '^\\!', end: '$'
    }
  ]
}
/*
DOS definition. Alexander Makarov (http://rmcreative.ru/)
*/
hljs.DOS_KEYWORDS = {
  'flow': {'if':1, 'else':1, 'goto':1, 'for':1, 'in':1, 'do':1, 'call':1, 'exit':1, 'not':1, 'exist':1, 'errorlevel':1, 'defined':1, 'equ':1, 'neq':1, 'lss':1, 'leq':1, 'gtr':1, 'geq':1},
  'keyword':{'shift':1, 'cd':1, 'dir':1, 'echo':1, 'setlocal':1, 'endlocal':1, 'set':1, 'pause':1, 'copy':1},
  'stream':{'prn':1, 'nul':1, 'lpt3':1, 'lpt2':1, 'lpt1':1, 'con':1, 'com4':1, 'com3':1, 'com2':1, 'com1':1, 'aux':1},
  'winutils':{'ping':1, 'net':1, 'ipconfig':1, 'taskkill':1, 'xcopy':1, 'ren':1, 'del':1}
};

hljs.LANGUAGES.dos = {
  case_insensitive: true,
  defaultMode: {
    lexems: [hljs.IDENT_RE],
    contains: ['envvar', 'number', 'comment'],
    keywords: hljs.DOS_KEYWORDS
  },
  modes: [
    {
    	className: 'number',
    	begin: '\\b\\d+', end: '^',
    	relevance: 0
    },
    {
      className: 'comment',
      begin: '@?rem', end: '$'
    },
    {
      className: 'envvar',
      begin: '%[^ ]+?%', end: '^'
    }
  ]
};
hljs.LANGUAGES.python = {
  defaultMode: {
    lexems: [hljs.UNDERSCORE_IDENT_RE],
    illegal: '(</|->)',
    contains: ['comment', 'string', 'function', 'class', 'number', 'decorator'],
    keywords: {
      'keyword': {'and': 1, 'elif': 1, 'is': 1, 'global': 1, 'as': 1, 'in': 1, 'if': 1, 'from': 1, 'raise': 1, 'for': 1, 'except': 1, 'finally': 1, 'print': 1, 'import': 1, 'pass': 1, 'return': 1, 'exec': 1, 'else': 1, 'break': 1, 'not': 1, 'with': 1, 'class': 1, 'assert': 1, 'yield': 1, 'try': 1, 'while': 1, 'continue': 1, 'del': 1, 'or': 1, 'def': 1, 'lambda': 1},
      'built_in': {'None': 1, 'True': 1, 'False': 1, 'Ellipsis': 1, 'NotImplemented': 1}
    }
  },
  modes: [
    {
      className: 'function',
      lexems: [hljs.UNDERSCORE_IDENT_RE],
      begin: '\\bdef ', end: ':',
      illegal: '$',
      keywords: {'def': 1},
      contains: ['title', 'params'],
      relevance: 10
    },
    {
      className: 'class',
      lexems: [hljs.UNDERSCORE_IDENT_RE],
      begin: '\\bclass ', end: ':',
      illegal: '[${]',
      keywords: {'class': 1},
      contains: ['title', 'params',],
      relevance: 10
    },
    {
      className: 'title',
      begin: hljs.UNDERSCORE_IDENT_RE, end: '^'
    },
    {
      className: 'params',
      begin: '\\(', end: '\\)',
      contains: ['string']
    },
    hljs.HASH_COMMENT_MODE,
    hljs.C_NUMBER_MODE,
    {
      className: 'string',
      begin: '\'\'\'', end: '\'\'\'',
      relevance: 10
    },
    {
      className: 'string',
      begin: '"""', end: '"""',
      relevance: 10
    },
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    hljs.BACKSLASH_ESCAPE,
    {
      className: 'string',
      begin: 'r\'', end: '\'',
      relevance: 10
    },
    {
      className: 'string',
      begin: 'r"', end: '"',
      relevance: 10
    },
    {
      className: 'string',
      begin: 'u\'', end: '(^|[^\\\\])\'',
      relevance: 10
    },
    {
      className: 'string',
      begin: 'u"', end: '(^|[^\\\\])"',
      relevance: 10
    },
    {
      className: 'string',
      begin: 'ur\'', end: '\'',
      relevance: 10
    },
    {
      className: 'string',
      begin: 'ur"', end: '"',
      relevance: 10
    },
    {
      className: 'decorator',
      begin: '@', end: '$'
    }
  ]
};


/*

Perl definition (с) Peter Leonov <gojpeg@yandex.ru>

*/
hljs.PERL_DEFAULT_CONTAINS = ['comment', 'string', 'number', 'regexp', 'sub', 'variable', 'operator', 'pod'];
hljs.PERL_KEYWORDS = {'getpwent': 1, 'getservent': 1, 'quotemeta': 1, 'msgrcv': 1, 'scalar': 1, 'kill': 1, 'dbmclose': 1, 'undef': 1, 'lc': 1, 'ma': 1, 'syswrite': 1, 'tr': 1, 'send': 1, 'umask': 1, 'sysopen': 1, 'shmwrite': 1, 'vec': 1, 'qx': 1, 'utime': 1, 'local': 1, 'oct': 1, 'semctl': 1, 'localtime': 1, 'readpipe': 1, 'do': 1, 'return': 1, 'format': 1, 'read': 1, 'sprintf': 1, 'dbmopen': 1, 'pop': 1, 'getpgrp': 1, 'not': 1, 'getpwnam': 1, 'rewinddir': 1, 'qq': 1, 'fileno': 1, 'qw': 1, 'endprotoent': 1, 'wait': 1, 'sethostent': 1, 'bless': 1, 's': 1, 'opendir': 1, 'continue': 1, 'each': 1, 'sleep': 1, 'endgrent': 1, 'shutdown': 1, 'dump': 1, 'chomp': 1, 'connect': 1, 'getsockname': 1, 'die': 1, 'socketpair': 1, 'close': 1, 'flock': 1, 'exists': 1, 'index': 1, 'shmget': 1, 'sub': 1, 'for': 1, 'endpwent': 1, 'redo': 1, 'lstat': 1, 'msgctl': 1, 'setpgrp': 1, 'abs': 1, 'exit': 1, 'select': 1, 'print': 1, 'ref': 1, 'gethostbyaddr': 1, 'unshift': 1, 'fcntl': 1, 'syscall': 1, 'goto': 1, 'getnetbyaddr': 1, 'join': 1, 'gmtime': 1, 'symlink': 1, 'semget': 1, 'splice': 1, 'x': 1, 'getpeername': 1, 'recv': 1, 'log': 1, 'setsockopt': 1, 'cos': 1, 'last': 1, 'reverse': 1, 'gethostbyname': 1, 'getgrnam': 1, 'study': 1, 'formline': 1, 'endhostent': 1, 'times': 1, 'chop': 1, 'length': 1, 'gethostent': 1, 'getnetent': 1, 'pack': 1, 'getprotoent': 1, 'getservbyname': 1, 'rand': 1, 'mkdir': 1, 'pos': 1, 'chmod': 1, 'y': 1, 'substr': 1, 'endnetent': 1, 'printf': 1, 'next': 1, 'open': 1, 'msgsnd': 1, 'readdir': 1, 'use': 1, 'unlink': 1, 'getsockopt': 1, 'getpriority': 1, 'rindex': 1, 'wantarray': 1, 'hex': 1, 'system': 1, 'getservbyport': 1, 'endservent': 1, 'int': 1, 'chr': 1, 'untie': 1, 'rmdir': 1, 'prototype': 1, 'tell': 1, 'listen': 1, 'fork': 1, 'shmread': 1, 'ucfirst': 1, 'setprotoent': 1, 'else': 1, 'sysseek': 1, 'link': 1, 'getgrgid': 1, 'shmctl': 1, 'waitpid': 1, 'unpack': 1, 'getnetbyname': 1, 'reset': 1, 'chdir': 1, 'grep': 1, 'split': 1, 'require': 1, 'caller': 1, 'lcfirst': 1, 'until': 1, 'warn': 1, 'while': 1, 'values': 1, 'shift': 1, 'telldir': 1, 'getpwuid': 1, 'my': 1, 'getprotobynumber': 1, 'delete': 1, 'and': 1, 'sort': 1, 'uc': 1, 'defined': 1, 'srand': 1, 'accept': 1, 'package': 1, 'seekdir': 1, 'getprotobyname': 1, 'semop': 1, 'our': 1, 'rename': 1, 'seek': 1, 'if': 1, 'q': 1, 'chroot': 1, 'sysread': 1, 'setpwent': 1, 'no': 1, 'crypt': 1, 'getc': 1, 'chown': 1, 'sqrt': 1, 'write': 1, 'setnetent': 1, 'setpriority': 1, 'foreach': 1, 'tie': 1, 'sin': 1, 'msgget': 1, 'map': 1, 'stat': 1, 'getlogin': 1, 'unless': 1, 'elsif': 1, 'truncate': 1, 'exec': 1, 'keys': 1, 'glob': 1, 'tied': 1, 'closedir': 1, 'ioctl': 1, 'socket': 1, 'readlink': 1, 'eval': 1, 'xor': 1, 'readline': 1, 'binmode': 1, 'setservent': 1, 'eof': 1, 'ord': 1, 'bind': 1, 'alarm': 1, 'pipe': 1, 'atan2': 1, 'getgrent': 1, 'exp': 1, 'time': 1, 'push': 1, 'setgrent': 1, 'gt': 1, 'lt': 1, 'or': 1, 'ne': 1, 'm': 1};

hljs.LANGUAGES.perl = {
  defaultMode: {
    lexems: [hljs.IDENT_RE],
    contains: hljs.PERL_DEFAULT_CONTAINS,
    keywords: hljs.PERL_KEYWORDS
  },
  modes: [

    // variables
    {
      className: 'variable',
      begin: '\\$\\d', end: '^'
    },
    {
      className: 'variable',
      begin: '[\\$\\%\\@\\*](\\^\\w\\b|#\\w+(\\:\\:\\w+)*|[^\\s\\w{]|{\\w+}|\\w+(\\:\\:\\w*)*)', end: '^'
    },

    // numbers and strings
    {
      className: 'subst',
      begin: '[$@]\\{', end: '\}',
      lexems: [hljs.IDENT_RE],
      keywords: hljs.PERL_KEYWORDS,
      contains: hljs.PERL_DEFAULT_CONTAINS,
      relevance: 10
    },
    {
      className: 'number',
      begin: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b', end: '^',
      relevance: 0
    },
    {
      className: 'string',
      begin: 'q[qwxr]?\\s*\\(', end: '\\)',
      contains: ['escape', 'subst', 'variable'],
      relevance: 5
    },
    {
      className: 'string',
      begin: 'q[qwxr]?\\s*\\[', end: '\\]',
      contains: ['escape', 'subst', 'variable'],
      relevance: 5
    },
    {
      className: 'string',
      begin: 'q[qwxr]?\\s*\\{', end: '\\}',
      contains: ['escape', 'subst', 'variable'],
      relevance: 5
    },
    {
      className: 'string',
      begin: 'q[qwxr]?\\s*\\|', end: '\\|',
      contains: ['escape', 'subst', 'variable'],
      relevance: 5
    },
    {
      className: 'string',
      begin: 'q[qwxr]?\\s*\\<', end: '\\>',
      contains: ['escape', 'subst', 'variable'],
      relevance: 5
    },
    {
      className: 'string',
      begin: 'qw\\s+q', end: 'q',
      contains: ['escape', 'subst', 'variable'],
      relevance: 5
    },
    {
      className: 'string',
      begin: '\'', end: '\'',
      contains: ['escape'],
      relevance: 0
    },
    {
      className: 'string',
      begin: '"', end: '"',
      contains: ['escape','subst','variable'],
      relevance: 0
    },
    hljs.BACKSLASH_ESCAPE,
    {
      className: 'string',
      begin: '`', end: '`',
      contains: ['escape']
    },
    
    // regexps
    {
      className: 'regexp',
      begin: '(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*', end: '^',
      relevance: 10
    },
    {
      className: 'regexp',
      begin: '(m|qr)?/', end: '/[a-z]*',
      contains: ['escape'],
      relevance: 0 // allows empty "//" which is a common comment delimiter in other languages
    },

    // bareword context
    {
      className: 'string',
      begin: '{\\w+}', end: '^',
      relevance: 0
    },
    {
      className: 'string',
      begin: '\-?\\w+\\s*\\=\\>', end: '^',
      relevance: 0
    },

    // subroutines
    {
      className: 'sub',
      begin: '\\bsub\\b', end: '(\\s*\\(.*?\\))?[;{]',
      lexems: [hljs.IDENT_RE],
      keywords: {'sub':1},
      relevance: 5
    },

    // operators
    {
      className: 'operator',
      begin: '-\\w\\b', end: '^',
      relevance: 0
    },

    // comments
    hljs.HASH_COMMENT_MODE,
    {
      className: 'comment',
      begin: '^(__END__|__DATA__)', end: '\\n$',
      relevance: 5
    },
    // pod
    {
      className: 'pod',
      begin: '\\=\\w', end: '\\=cut'
    }

  ]
};

/*

PHP5 definition (с) Victor Karamzin <Victor.Karamzin@enterra-inc.com>

*/
hljs.PHP5_KEYWORDS = {'and': 1, 'include_once': 1, 'list': 1, 'abstract': 1, 'global': 1, 'private': 1, 'echo': 1, 'interface': 1, 'as': 1, 'static': 1, 'endswitch': 1, 'array': 1, 'null': 1, 'if': 1, 'endwhile': 1, 'or': 1, 'const': 1, 'for': 1, 'endforeach': 1, 'self': 1, 'var': 1, 'while': 1, 'isset': 1, 'public': 1, 'protected': 1, 'exit': 1, 'foreach': 1, 'throw': 1, 'elseif': 1, 'extends': 1, 'include': 1, '__FILE__': 1, 'empty': 1, 'require_once': 1, 'function': 1, 'do': 1, 'xor': 1, 'return': 1, 'implements': 1, 'parent': 1, 'clone': 1, 'use': 1, '__CLASS__': 1, '__LINE__': 1, 'else': 1, 'break': 1, 'print': 1, 'eval': 1, 'new': 1, 'catch': 1, '__METHOD__': 1, 'class': 1, 'case': 1, 'exception': 1, 'php_user_filter': 1, 'default': 1, 'die': 1, 'require': 1, '__FUNCTION__': 1, 'enddeclare': 1, 'final': 1, 'try': 1, 'this': 1, 'switch': 1, 'continue': 1, 'endfor': 1, 'endif': 1, 'declare': 1, 'unset': 1};

hljs.PHP_IDENTIFIER_RE = '[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*';

hljs.LANGUAGES.php = {
  defaultMode: {
    lexems: [hljs.IDENT_RE],
    contains: ['comment', 'number', 'string', 'variable', 'preprocessor'],
    keywords: hljs.PHP5_KEYWORDS
  },
  case_insensitive: true,
  modes: [
    hljs.C_LINE_COMMENT_MODE,
    hljs.HASH_COMMENT_MODE,
    {
      className: 'comment',
      begin: '/\\*', end: '\\*/',
      contains: ['phpdoc']
    },
    {
      className: 'phpdoc',
      begin: '\\s@[A-Za-z]+', end: '^',
      relevance: 10
    },
    hljs.C_NUMBER_MODE,
    {
      className: 'string',
      begin: '\'', end: '\'',
      contains: ['escape'],
      relevance: 0
    },
    {
      className: 'string',
      begin: '"', end: '"',
      contains: ['escape'],
      relevance: 0
    },
    hljs.BACKSLASH_ESCAPE,
    {
      className: 'variable',
      begin: '\\$' + hljs.PHP_IDENTIFIER_RE, end: '^'
    },
    {
      className: 'preprocessor',
      begin: '<\\?php', end: '^',
      relevance: 10
    },
    {
      className: 'preprocessor',
      begin: '\\?>', end: '^'
    }
  ]
};

/*

Ruby definition (с) Anton Kovalyov <anton@kovalyov.net>, Peter Leonov <gojpeg@yandex.ru>

*/
hljs.RUBY_IDENT_RE = '[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?';
hljs.RUBY_DEFAULT_CONTAINS = ['comment', 'string', 'char', 'class', 'function', 'symbol', 'number', 'variable', 'regexp']
hljs.RUBY_KEYWORDS = {
  'keyword': {'and': 1, 'false': 1, 'then': 1, 'defined': 1, 'module': 1, 'in': 1, 'return': 1, 'redo': 1, 'if': 1, 'BEGIN': 1, 'retry': 1, 'end': 1, 'for': 1, 'true': 1, 'self': 1, 'when': 1, 'next': 1, 'until': 1, 'do': 1, 'begin': 1, 'unless': 1, 'END': 1, 'rescue': 1, 'nil': 1, 'else': 1, 'break': 1, 'undef': 1, 'not': 1, 'super': 1, 'class': 1, 'case': 1, 'require': 1, 'yield': 1, 'alias': 1, 'while': 1, 'ensure': 1, 'elsif': 1, 'or': 1, 'def': 1},
  'keymethods': {'__id__': 1, '__send__': 1, 'abort': 1, 'abs': 1, 'all?': 1, 'allocate': 1, 'ancestors': 1, 'any?': 1, 'arity': 1, 'assoc': 1, 'at': 1, 'at_exit': 1, 'autoload': 1, 'autoload?': 1, 'between?': 1, 'binding': 1, 'binmode': 1, 'block_given?': 1, 'call': 1, 'callcc': 1, 'caller': 1, 'capitalize': 1, 'capitalize!': 1, 'casecmp': 1, 'catch': 1, 'ceil': 1, 'center': 1, 'chomp': 1, 'chomp!': 1, 'chop': 1, 'chop!': 1, 'chr': 1, 'class': 1, 'class_eval': 1, 'class_variable_defined?': 1, 'class_variables': 1, 'clear': 1, 'clone': 1, 'close': 1, 'close_read': 1, 'close_write': 1, 'closed?': 1, 'coerce': 1, 'collect': 1, 'collect!': 1, 'compact': 1, 'compact!': 1, 'concat': 1, 'const_defined?': 1, 'const_get': 1, 'const_missing': 1, 'const_set': 1, 'constants': 1, 'count': 1, 'crypt': 1, 'default': 1, 'default_proc': 1, 'delete': 1, 'delete!': 1, 'delete_at': 1, 'delete_if': 1, 'detect': 1, 'display': 1, 'div': 1, 'divmod': 1, 'downcase': 1, 'downcase!': 1, 'downto': 1, 'dump': 1, 'dup': 1, 'each': 1, 'each_byte': 1, 'each_index': 1, 'each_key': 1, 'each_line': 1, 'each_pair': 1, 'each_value': 1, 'each_with_index': 1, 'empty?': 1, 'entries': 1, 'eof': 1, 'eof?': 1, 'eql?': 1, 'equal?': 1, 'eval': 1, 'exec': 1, 'exit': 1, 'exit!': 1, 'extend': 1, 'fail': 1, 'fcntl': 1, 'fetch': 1, 'fileno': 1, 'fill': 1, 'find': 1, 'find_all': 1, 'first': 1, 'flatten': 1, 'flatten!': 1, 'floor': 1, 'flush': 1, 'for_fd': 1, 'foreach': 1, 'fork': 1, 'format': 1, 'freeze': 1, 'frozen?': 1, 'fsync': 1, 'getc': 1, 'gets': 1, 'global_variables': 1, 'grep': 1, 'gsub': 1, 'gsub!': 1, 'has_key?': 1, 'has_value?': 1, 'hash': 1, 'hex': 1, 'id': 1, 'include?': 1, 'included_modules': 1, 'index': 1, 'indexes': 1, 'indices': 1, 'induced_from': 1, 'inject': 1, 'insert': 1, 'inspect': 1, 'instance_eval': 1, 'instance_method': 1, 'instance_methods': 1, 'instance_of?': 1, 'instance_variable_defined?': 1, 'instance_variable_get': 1, 'instance_variable_set': 1, 'instance_variables': 1, 'integer?': 1, 'intern': 1, 'invert': 1, 'ioctl': 1, 'is_a?': 1, 'isatty': 1, 'iterator?': 1, 'join': 1, 'key?': 1, 'keys': 1, 'kind_of?': 1, 'lambda': 1, 'last': 1, 'length': 1, 'lineno': 1, 'ljust': 1, 'load': 1, 'local_variables': 1, 'loop': 1, 'lstrip': 1, 'lstrip!': 1, 'map': 1, 'map!': 1, 'match': 1, 'max': 1, 'member?': 1, 'merge': 1, 'merge!': 1, 'method': 1, 'method_defined?': 1, 'method_missing': 1, 'methods': 1, 'min': 1, 'module_eval': 1, 'modulo': 1, 'name': 1, 'nesting': 1, 'new': 1, 'next': 1, 'next!': 1, 'nil?': 1, 'nitems': 1, 'nonzero?': 1, 'object_id': 1, 'oct': 1, 'open': 1, 'pack': 1, 'partition': 1, 'pid': 1, 'pipe': 1, 'pop': 1, 'popen': 1, 'pos': 1, 'prec': 1, 'prec_f': 1, 'prec_i': 1, 'print': 1, 'printf': 1, 'private_class_method': 1, 'private_instance_methods': 1, 'private_method_defined?': 1, 'private_methods': 1, 'proc': 1, 'protected_instance_methods': 1, 'protected_method_defined?': 1, 'protected_methods': 1, 'public_class_method': 1, 'public_instance_methods': 1, 'public_method_defined?': 1, 'public_methods': 1, 'push': 1, 'putc': 1, 'puts': 1, 'quo': 1, 'raise': 1, 'rand': 1, 'rassoc': 1, 'read': 1, 'read_nonblock': 1, 'readchar': 1, 'readline': 1, 'readlines': 1, 'readpartial': 1, 'rehash': 1, 'reject': 1, 'reject!': 1, 'remainder': 1, 'reopen': 1, 'replace': 1, 'require': 1, 'respond_to?': 1, 'reverse': 1, 'reverse!': 1, 'reverse_each': 1, 'rewind': 1, 'rindex': 1, 'rjust': 1, 'round': 1, 'rstrip': 1, 'rstrip!': 1, 'scan': 1, 'seek': 1, 'select': 1, 'send': 1, 'set_trace_func': 1, 'shift': 1, 'singleton_method_added': 1, 'singleton_methods': 1, 'size': 1, 'sleep': 1, 'slice': 1, 'slice!': 1, 'sort': 1, 'sort!': 1, 'sort_by': 1, 'split': 1, 'sprintf': 1, 'squeeze': 1, 'squeeze!': 1, 'srand': 1, 'stat': 1, 'step': 1, 'store': 1, 'strip': 1, 'strip!': 1, 'sub': 1, 'sub!': 1, 'succ': 1, 'succ!': 1, 'sum': 1, 'superclass': 1, 'swapcase': 1, 'swapcase!': 1, 'sync': 1, 'syscall': 1, 'sysopen': 1, 'sysread': 1, 'sysseek': 1, 'system': 1, 'syswrite': 1, 'taint': 1, 'tainted?': 1, 'tell': 1, 'test': 1, 'throw': 1, 'times': 1, 'to_a': 1, 'to_ary': 1, 'to_f': 1, 'to_hash': 1, 'to_i': 1, 'to_int': 1, 'to_io': 1, 'to_proc': 1, 'to_s': 1, 'to_str': 1, 'to_sym': 1, 'tr': 1, 'tr!': 1, 'tr_s': 1, 'tr_s!': 1, 'trace_var': 1, 'transpose': 1, 'trap': 1, 'truncate': 1, 'tty?': 1, 'type': 1, 'ungetc': 1, 'uniq': 1, 'uniq!': 1, 'unpack': 1, 'unshift': 1, 'untaint': 1, 'untrace_var': 1, 'upcase': 1, 'upcase!': 1, 'update': 1, 'upto': 1, 'value?': 1, 'values': 1, 'values_at': 1, 'warn': 1, 'write': 1, 'write_nonblock': 1, 'zero?': 1, 'zip': 1}
}

hljs.LANGUAGES.ruby = {
  defaultMode: {
    lexems: [hljs.RUBY_IDENT_RE],
    contains: hljs.RUBY_DEFAULT_CONTAINS,
    keywords: hljs.RUBY_KEYWORDS
  },
  modes: [
    hljs.HASH_COMMENT_MODE,
    {
      className: 'comment',
      begin: '^\\=begin', end: '^\\=end',
      relevance: 10
    },
    {
      className: 'comment',
      begin: '^__END__', end: '\\n$'
    },
    {
      className: 'params',
      begin: '\\(', end: '\\)',
      lexems: [hljs.RUBY_IDENT_RE],
      keywords: hljs.RUBY_KEYWORDS,
      contains: hljs.RUBY_DEFAULT_CONTAINS
    },
    {
      className: 'function',
      begin: '\\bdef\\b', end: '$|;',
      lexems: [hljs.RUBY_IDENT_RE],
      keywords: hljs.RUBY_KEYWORDS,
      contains: ['title', 'params', 'comment']
    },
    {
      className: 'class',
      begin: '\\b(class|module)\\b', end: '$',
      lexems: [hljs.UNDERSCORE_IDENT_RE],
      keywords: hljs.RUBY_KEYWORDS,
      contains: ['title', 'inheritance', 'comment'],
      keywords: {'class': 1, 'module': 1}
    },
    {
      className: 'title',
      begin: '[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?', end: '^',
      relevance: 0
    },
    {
      className: 'inheritance',
      begin: '<\\s*', end: '^',
      contains: ['parent']
    },
    {
      className: 'parent',
      begin: '(' + hljs.IDENT_RE + '::)?' + hljs.IDENT_RE, end: '^'
    },
    {
      className: 'number',
      begin: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b', end: '^',
      relevance: 0
    },
    {
      className: 'number',
      begin: '\\?\\w', end: '^'
    },
    {
      className: 'string',
      begin: '\'', end: '\'',
      contains: ['escape', 'subst'],
      relevance: 0
    },
    {
      className: 'string',
      begin: '"', end: '"',
      contains: ['escape', 'subst'],
      relevance: 0
    },
    {
      className: 'string',
      begin: '%[qw]?\\(', end: '\\)',
      contains: ['escape', 'subst'],
      relevance: 10
    },
    {
      className: 'string',
      begin: '%[qw]?\\[', end: '\\]',
      contains: ['escape', 'subst'],
      relevance: 10
    },
    {
      className: 'string',
      begin: '%[qw]?{', end: '}',
      contains: ['escape', 'subst'],
      relevance: 10
    },
    {
      className: 'string',
      begin: '%[qw]?<', end: '>',
      contains: ['escape', 'subst'],
      relevance: 10
    },
    {
      className: 'string',
      begin: '%[qw]?/', end: '/',
      contains: ['escape', 'subst'],
      relevance: 10
    },
    {
      className: 'string',
      begin: '%[qw]?%', end: '%',
      contains: ['escape', 'subst'],
      relevance: 10
    },
    {
      className: 'string',
      begin: '%[qw]?-', end: '-',
      contains: ['escape', 'subst'],
      relevance: 10
    },
    {
      className: 'string',
      begin: '%[qw]?\\|', end: '\\|',
      contains: ['escape', 'subst'],
      relevance: 10
    },
    {
      className: 'symbol',
      begin: ':' + hljs.RUBY_IDENT_RE, end: '^'
    },
    hljs.BACKSLASH_ESCAPE,
    {
      className: 'subst',
      begin: '#\\{', end: '}',
      lexems: [hljs.RUBY_IDENT_RE],
      keywords: hljs.RUBY_KEYWORDS,
      contains: hljs.RUBY_DEFAULT_CONTAINS
    },
    {
      className: 'regexp',
      begin: '/', end: '/[a-z]*',
      contains: ['escape'],
      relevance: 0
    },
    {
      className: 'variable',
      begin: '(\\$\\W)|((\\$|\\@\\@?)(\\w+))', end: '^'
    }
  ]
};
hljs.LANGUAGES.ini =
{
  case_insensitive: true,
  defaultMode: {
    contains: ['comment', 'title', 'setting'],
    illegal: '[^\\s]'
  },
  modes: [
    {
      className: 'comment',
      begin: ';', end: '$'
    },
    {
      className: 'title',
      begin: '\\[', end: '\\]'
    },
    {
      className: 'setting',
      begin: '^[a-z]+[ \\t]*=[ \\t]*', end: '$',
      contains: ['value']
    },
    {
      className: 'value',
      begin: '^', endsWithParent: true,
      contains: ['string', 'number'],
      lexems: [hljs.IDENT_RE],
      keywords: {'on': 1, 'off': 1, 'true': 1, 'false': 1, 'yes': 1, 'no': 1}
    },
    hljs.QUOTE_STRING_MODE,
    hljs.BACKSLASH_ESCAPE,
    {
      className: 'number',
      begin: '\\d+', end: '^'
    }
  ]
};
hljs.LANGUAGES.javascript = {
  defaultMode: {
    lexems: [hljs.UNDERSCORE_IDENT_RE],
    contains: ['string', 'comment', 'number', 'regexp', 'function'],
    keywords: {
      'keyword': {'in': 1, 'if': 1, 'for': 1, 'while': 1, 'finally': 1, 'var': 1, 'new': 1, 'function': 1, 'do': 1, 'return': 1, 'void': 1, 'else': 1, 'break': 1, 'catch': 1, 'instanceof': 1, 'with': 1, 'throw': 1, 'case': 1, 'default': 1, 'try': 1, 'this': 1, 'switch': 1, 'continue': 1, 'typeof': 1, 'delete': 1},
      'literal': {'true': 1, 'false': 1, 'null': 1}
    }
  },
  modes: [
    hljs.C_LINE_COMMENT_MODE,
    hljs.C_BLOCK_COMMENT_MODE,
    hljs.C_NUMBER_MODE,
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    hljs.BACKSLASH_ESCAPE,
    {
      className: 'regexp',
      begin: '/.*?[^\\\\/]/[gim]*', end: '^'
    },
    {
      className: 'function',
      begin: 'function\\b', end: '{',
      lexems: [hljs.UNDERSCORE_IDENT_RE],
      keywords: {'function': 1},
      contains: ['title', 'params']
    },
    {
      className: 'title',
      begin: '[A-Za-z$_][0-9A-Za-z$_]*', end: '^'
    },
    {
      className: 'params',
      begin: '\\(', end: '\\)',
      contains: ['string', 'comment']
    }
  ]
};
/*

Generic lisp definition (c) Vasily Polovnyov <vast@whiteants.net>

*/
hljs.LISP_IDENT_RE = '[a-zA-Z_\\-\\+\\*\\/\\<\\=\\>\\&\\#][a-zA-Z0-9_\\-\\+\\*\\/\\<\\=\\>\\&\\#]*'
hljs.LISP_SIMPLE_NUMBER_RE = '(\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s)(\\+|\\-)?\\d+)?'
hljs.LANGUAGES.lisp = {
  case_insensitive: true,
  defaultMode: {
    lexems: [hljs.LISP_IDENT_RE],
    contains: ['literal', 'number', 'string', 'comment', 'quoted', 'list'],
    illegal: '[^\\s]'
  },
  modes: [
    hljs.QUOTE_STRING_MODE,
    {
      className: 'number',
      begin: hljs.LISP_SIMPLE_NUMBER_RE, end: '^'
    },
    {
      className: 'number',
      begin: '#b[0-1]+(/[0-1]+)?', end: '^'
    },
    {
      className: 'number',
      begin: '#o[0-7]+(/[0-7]+)?', end: '^'
    },
    {
      className: 'number',
      begin: '#x[0-9a-f]+(/[0-9a-f]+)?', end: '^'
    },
    {
      className: 'number',
      begin: '#c\\(' + hljs.LISP_SIMPLE_NUMBER_RE + ' +' + hljs.LISP_SIMPLE_NUMBER_RE, end: '\\)'
    },
    {
      className: 'comment',
      begin: ';', end: '$'
    },
    {
      className: 'quoted',
      begin: '\\\'\\(', end: '\\)',
      contains: ['number', 'string', 'variable', 'keyword', 'quoted_list']
    },
    {
      className: 'quoted',
      begin: '\\(quote ', end: '\\)',
      contains: ['number', 'string', 'variable', 'keyword', 'quoted_list'],
      lexems: [hljs.LISP_IDENT_RE],
      keywords: {'title': {'quote': 1}}
    },
    {
      className: 'quoted_list',
      begin: '\\(', end: '\\)',
      contains: ['quoted_list', 'literal', 'number', 'string']
    },
    {
      className: 'list',
      begin: '\\(', end: '\\)',
      contains: ['title','body']
    },
    {
      className: 'title',
      begin: hljs.LISP_IDENT_RE, end: '^',
      endsWithParent: true
    },
    {
      className: 'body',
      begin: '^', endsWithParent: true, excludeEnd: true,
      contains: ['quoted', 'list', 'literal', 'number', 'string', 'comment', 'variable', 'keyword']
    },
    {
      className: 'keyword',
      begin: '[:&]' + hljs.LISP_IDENT_RE, end: '^'
    },
    {
      className: 'variable',
      begin: '\\*', end: '\\*'
    },
    {
      className: 'literal',
      begin: '\\b(t{1}|nil)\\b', end: '^'
    }
  ]
}
/*

Maya Embedded Language (c) Shuen-Huei Guan <drake.guan@gmail.com>

*/
hljs.LANGUAGES.mel = {
  defaultMode: {
    lexems: [hljs.UNDERSCORE_IDENT_RE],
    illegal: '</',
    contains: ['number', 'string', 'variable', 'comment'],
    keywords: {'int': 1, 'float': 1, 'string': 1, 'float': 1, 'vector': 1, 'matrix': 1, 
    'if': 1, 'else': 1, 'switch': 1, 'case': 1, 'default': 1, 'while': 1, 'do': 1, 'for': 1, 'in': 1, 'break': 1, 'continue': 1,
    'exists': 1, 'objExists': 1, 'attributeExists': 1,
    'global': 1, 'proc': 1, 'return': 1,
    'error': 1, 'warning': 1, 'trace': 1, 'catch': 1,
    'about': 1, 'abs': 1, 'addAttr': 1, 'addAttributeEditorNodeHelp': 1, 'addDynamic': 1, 'addNewShelfTab': 1, 'addPP': 1, 'addPanelCategory': 1, 'addPrefixToName': 1, 'advanceToNextDrivenKey': 1, 'affectedNet': 1, 'affects': 1, 'aimConstraint': 1, 'air': 1, 'alias': 1, 'aliasAttr': 1, 'align': 1, 'alignCtx': 1, 'alignCurve': 1, 'alignSurface': 1, 'allViewFit': 1, 'ambientLight': 1, 'angle': 1, 'angleBetween': 1, 'animCone': 1, 'animCurveEditor': 1, 'animDisplay': 1, 'animView': 1, 'annotate': 1, 'appendStringArray': 1, 'applicationName': 1, 'applyAttrPreset': 1, 'applyTake': 1, 'arcLenDimContext': 1, 'arcLengthDimension': 1, 'arclen': 1, 'arrayMapper': 1, 'art3dPaintCtx': 1, 'artAttrCtx': 1, 'artAttrPaintVertexCtx': 1, 'artAttrSkinPaintCtx': 1, 'artAttrTool': 1, 'artBuildPaintMenu': 1, 'artFluidAttrCtx': 1, 'artPuttyCtx': 1, 'artSelectCtx': 1, 'artSetPaintCtx': 1, 'artUserPaintCtx': 1, 'assignCommand': 1, 'assignInputDevice': 1, 'assignViewportFactories': 1, 'attachCurve': 1, 'attachDeviceAttr': 1, 'attachSurface': 1, 'attrColorSliderGrp': 1, 'attrCompatibility': 1, 'attrControlGrp': 1, 'attrEnumOptionMenu': 1, 'attrEnumOptionMenuGrp': 1, 'attrFieldGrp': 1, 'attrFieldSliderGrp': 1, 'attrNavigationControlGrp': 1, 'attrPresetEditWin': 1, 'attributeExists': 1, 'attributeInfo': 1, 'attributeMenu': 1, 'attributeQuery': 1, 'autoKeyframe': 1, 'autoPlace': 1, 'bakeClip': 1, 'bakeFluidShading': 1, 'bakePartialHistory': 1, 'bakeResults': 1, 'bakeSimulation': 1, 'basename': 1, 'basenameEx': 1, 'batchRender': 1, 'bessel': 1, 'bevel': 1, 'bevelPlus': 1, 'binMembership': 1, 'bindSkin': 1, 'blend2': 1, 'blendShape': 1, 'blendShapeEditor': 1, 'blendShapePanel': 1, 'blendTwoAttr': 1, 'blindDataType': 1, 'boneLattice': 1, 'boundary': 1, 'boxDollyCtx': 1, 'boxZoomCtx': 1, 'bufferCurve': 1, 'buildBookmarkMenu': 1, 'buildKeyframeMenu': 1, 'button': 1, 'buttonManip': 1, 'CBG': 1, 'cacheFile': 1, 'cacheFileCombine': 1, 'cacheFileMerge': 1, 'cacheFileTrack': 1, 'camera': 1, 'cameraView': 1, 'canCreateManip': 1, 'canvas': 1, 'capitalizeString': 1, 'catch': 1, 'catchQuiet': 1, 'ceil': 1, 'changeSubdivComponentDisplayLevel': 1, 'changeSubdivRegion': 1, 'channelBox': 1, 'character': 1, 'characterMap': 1, 'characterOutlineEditor': 1, 'characterize': 1, 'chdir': 1, 'checkBox': 1, 'checkBoxGrp': 1, 'checkDefaultRenderGlobals': 1, 'choice': 1, 'circle': 1, 'circularFillet': 1, 'clamp': 1, 'clear': 1, 'clearCache': 1, 'clip': 1, 'clipEditor': 1, 'clipEditorCurrentTimeCtx': 1, 'clipSchedule': 1, 'clipSchedulerOutliner': 1, 'clipTrimBefore': 1, 'closeCurve': 1, 'closeSurface': 1, 'cluster': 1, 'cmdFileOutput': 1, 'cmdScrollFieldExecuter': 1, 'cmdScrollFieldReporter': 1, 'cmdShell': 1, 'coarsenSubdivSelectionList': 1, 'collision': 1, 'color': 1, 'colorAtPoint': 1, 'colorEditor': 1, 'colorIndex': 1, 'colorIndexSliderGrp': 1, 'colorSliderButtonGrp': 1, 'colorSliderGrp': 1, 'columnLayout': 1, 'commandEcho': 1, 'commandLine': 1, 'commandPort': 1, 'compactHairSystem': 1, 'componentEditor': 1, 'compositingInterop': 1, 'computePolysetVolume': 1, 'condition': 1, 'cone': 1, 'confirmDialog': 1, 'connectAttr': 1, 'connectControl': 1, 'connectDynamic': 1, 'connectJoint': 1, 'connectionInfo': 1, 'constrain': 1, 'constrainValue': 1, 'constructionHistory': 1, 'container': 1, 'containsMultibyte': 1, 'contextInfo': 1, 'control': 1, 'convertFromOldLayers': 1, 'convertIffToPsd': 1, 'convertLightmap': 1, 'convertSolidTx': 1, 'convertTessellation': 1, 'convertUnit': 1, 'copyArray': 1, 'copyFlexor': 1, 'copyKey': 1, 'copySkinWeights': 1, 'cos': 1, 'cpButton': 1, 'cpCache': 1, 'cpClothSet': 1, 'cpCollision': 1, 'cpConstraint': 1, 'cpConvClothToMesh': 1, 'cpForces': 1, 'cpGetSolverAttr': 1, 'cpPanel': 1, 'cpProperty': 1, 'cpRigidCollisionFilter': 1, 'cpSeam': 1, 'cpSetEdit': 1, 'cpSetSolverAttr': 1, 'cpSolver': 1, 'cpSolverTypes': 1, 'cpTool': 1, 'cpUpdateClothUVs': 1, 'createDisplayLayer': 1, 'createDrawCtx': 1, 'createEditor': 1, 'createLayeredPsdFile': 1, 'createMotionField': 1, 'createNewShelf': 1, 'createNode': 1, 'createRenderLayer': 1, 'createSubdivRegion': 1, 'cross': 1, 'crossProduct': 1, 'ctxAbort': 1, 'ctxCompletion': 1, 'ctxEditMode': 1, 'ctxTraverse': 1, 'currentCtx': 1, 'currentTime': 1, 'currentTimeCtx': 1, 'currentUnit': 1, 'currentUnit': 1, 'curve': 1, 'curveAddPtCtx': 1, 'curveCVCtx': 1, 'curveEPCtx': 1, 'curveEditorCtx': 1, 'curveIntersect': 1, 'curveMoveEPCtx': 1, 'curveOnSurface': 1, 'curveSketchCtx': 1, 'cutKey': 1, 'cycleCheck': 1, 'cylinder': 1, 'dagPose': 1, 'date': 1, 'defaultLightListCheckBox': 1, 'defaultNavigation': 1, 'defineDataServer': 1, 'defineVirtualDevice': 1, 'deformer': 1, 'deg_to_rad': 1, 'delete': 1, 'deleteAttr': 1, 'deleteShadingGroupsAndMaterials': 1, 'deleteShelfTab': 1, 'deleteUI': 1, 'deleteUnusedBrushes': 1, 'delrandstr': 1, 'detachCurve': 1, 'detachDeviceAttr': 1, 'detachSurface': 1, 'deviceEditor': 1, 'devicePanel': 1, 'dgInfo': 1, 'dgdirty': 1, 'dgeval': 1, 'dgtimer': 1, 'dimWhen': 1, 'directKeyCtx': 1, 'directionalLight': 1, 'dirmap': 1, 'dirname': 1, 'disable': 1, 'disconnectAttr': 1, 'disconnectJoint': 1, 'diskCache': 1, 'displacementToPoly': 1, 'displayAffected': 1, 'displayColor': 1, 'displayCull': 1, 'displayLevelOfDetail': 1, 'displayPref': 1, 'displayRGBColor': 1, 'displaySmoothness': 1, 'displayStats': 1, 'displayString': 1, 'displaySurface': 1, 'distanceDimContext': 1, 'distanceDimension': 1, 'doBlur': 1, 'dolly': 1, 'dollyCtx': 1, 'dopeSheetEditor': 1, 'dot': 1, 'dotProduct': 1, 'doubleProfileBirailSurface': 1, 'drag': 1, 'dragAttrContext': 1, 'draggerContext': 1, 'dropoffLocator': 1, 'duplicate': 1, 'duplicateCurve': 1, 'duplicateSurface': 1, 'dynCache': 1, 'dynControl': 1, 'dynExport': 1, 'dynExpression': 1, 'dynGlobals': 1, 'dynPaintEditor': 1, 'dynParticleCtx': 1, 'dynPref': 1, 'dynRelEdPanel': 1, 'dynRelEditor': 1, 'dynamicLoad': 1, 'editAttrLimits': 1, 'editDisplayLayerGlobals': 1, 'editDisplayLayerMembers': 1, 'editRenderLayerAdjustment': 1, 'editRenderLayerGlobals': 1, 'editRenderLayerMembers': 1, 'editor': 1, 'editorTemplate': 1, 'effector': 1, 'emit': 1, 'emitter': 1, 'enableDevice': 1, 'encodeString': 1, 'endString': 1, 'endsWith': 1, 'env': 1, 'equivalent': 1, 'equivalentTol': 1, 'erf': 1, 'error': 1, 'eval': 1, 'eval': 1, 'evalDeferred': 1, 'evalEcho': 1, 'event': 1, 'exactWorldBoundingBox': 1, 'exclusiveLightCheckBox': 1, 'exec': 1, 'executeForEachObject': 1, 'exists': 1, 'exp': 1, 'expression': 1, 'expressionEditorListen': 1, 'extendCurve': 1, 'extendSurface': 1, 'extrude': 1, 'fcheck': 1, 'fclose': 1, 'feof': 1, 'fflush': 1, 'fgetline': 1, 'fgetword': 1, 'file': 1, 'fileBrowserDialog': 1, 'fileDialog': 1, 'fileExtension': 1, 'fileInfo': 1, 'filetest': 1, 'filletCurve': 1, 'filter': 1, 'filterCurve': 1, 'filterExpand': 1, 'filterStudioImport': 1, 'findAllIntersections': 1, 'findAnimCurves': 1, 'findKeyframe': 1, 'findMenuItem': 1, 'findRelatedSkinCluster': 1, 'finder': 1, 'firstParentOf': 1, 'fitBspline': 1, 'flexor': 1, 'floatEq': 1, 'floatField': 1, 'floatFieldGrp': 1, 'floatScrollBar': 1, 'floatSlider': 1, 'floatSlider2': 1, 'floatSliderButtonGrp': 1, 'floatSliderGrp': 1, 'floor': 1, 'flow': 1, 'fluidCacheInfo': 1, 'fluidEmitter': 1, 'fluidVoxelInfo': 1, 'flushUndo': 1, 'fmod': 1, 'fontDialog': 1, 'fopen': 1, 'formLayout': 1, 'format': 1, 'fprint': 1, 'frameLayout': 1, 'fread': 1, 'freeFormFillet': 1, 'frewind': 1, 'fromNativePath': 1, 'fwrite': 1, 'gamma': 1, 'gauss': 1, 'geometryConstraint': 1, 'getApplicationVersionAsFloat': 1, 'getAttr': 1, 'getClassification': 1, 'getDefaultBrush': 1, 'getFileList': 1, 'getFluidAttr': 1, 'getInputDeviceRange': 1, 'getMayaPanelTypes': 1, 'getModifiers': 1, 'getPanel': 1, 'getParticleAttr': 1, 'getPluginResource': 1, 'getenv': 1, 'getpid': 1, 'glRender': 1, 'glRenderEditor': 1, 'globalStitch': 1, 'gmatch': 1, 'goal': 1, 'gotoBindPose': 1, 'grabColor': 1, 'gradientControl': 1, 'gradientControlNoAttr': 1, 'graphDollyCtx': 1, 'graphSelectContext': 1, 'graphTrackCtx': 1, 'gravity': 1, 'grid': 1, 'gridLayout': 1, 'group': 1, 'groupObjectsByName': 1, 'HfAddAttractorToAS': 1, 'HfAssignAS': 1, 'HfBuildEqualMap': 1, 'HfBuildFurFiles': 1, 'HfBuildFurImages': 1, 'HfCancelAFR': 1, 'HfConnectASToHF': 1, 'HfCreateAttractor': 1, 'HfDeleteAS': 1, 'HfEditAS': 1, 'HfPerformCreateAS': 1, 'HfRemoveAttractorFromAS': 1, 'HfSelectAttached': 1, 'HfSelectAttractors': 1, 'HfUnAssignAS': 1, 'hardenPointCurve': 1, 'hardware': 1, 'hardwareRenderPanel': 1, 'headsUpDisplay': 1, 'headsUpMessage': 1, 'help': 1, 'helpLine': 1, 'hermite': 1, 'hide': 1, 'hilite': 1, 'hitTest': 1, 'hotBox': 1, 'hotkey': 1, 'hotkeyCheck': 1, 'hsv_to_rgb': 1, 'hudButton': 1, 'hudSlider': 1, 'hudSliderButton': 1, 'hwReflectionMap': 1, 'hwRender': 1, 'hwRenderLoad': 1, 'hyperGraph': 1, 'hyperPanel': 1, 'hyperShade': 1, 'hypot': 1, 'iconTextButton': 1, 'iconTextCheckBox': 1, 'iconTextRadioButton': 1, 'iconTextRadioCollection': 1, 'iconTextScrollList': 1, 'iconTextStaticLabel': 1, 'ikHandle': 1, 'ikHandleCtx': 1, 'ikHandleDisplayScale': 1, 'ikSolver': 1, 'ikSplineHandleCtx': 1, 'ikSystem': 1, 'ikSystemInfo': 1, 'ikfkDisplayMethod': 1, 'illustratorCurves': 1, 'image': 1, 'imfPlugins': 1, 'inheritTransform': 1, 'insertJoint': 1, 'insertJointCtx': 1, 'insertKeyCtx': 1, 'insertKnotCurve': 1, 'insertKnotSurface': 1, 'instance': 1, 'instanceable': 1, 'instancer': 1, 'intField': 1, 'intFieldGrp': 1, 'intScrollBar': 1, 'intSlider': 1, 'intSliderGrp': 1, 'interToUI': 1, 'internalVar': 1, 'intersect': 1, 'iprEngine': 1, 'isAnimCurve': 1, 'isConnected': 1, 'isDirty': 1, 'isParentOf': 1, 'isSameObject': 1, 'isTrue': 1, 'isValidObjectName': 1, 'isValidString': 1, 'isValidUiName': 1, 'isolateSelect': 1, 'itemFilter': 1, 'itemFilterAttr': 1, 'itemFilterRender': 1, 'itemFilterType': 1, 'joint': 1, 'jointCluster': 1, 'jointCtx': 1, 'jointDisplayScale': 1, 'jointLattice': 1, 'keyTangent': 1, 'keyframe': 1, 'keyframeOutliner': 1, 'keyframeRegionCurrentTimeCtx': 1, 'keyframeRegionDirectKeyCtx': 1, 'keyframeRegionDollyCtx': 1, 'keyframeRegionInsertKeyCtx': 1, 'keyframeRegionMoveKeyCtx': 1, 'keyframeRegionScaleKeyCtx': 1, 'keyframeRegionSelectKeyCtx': 1, 'keyframeRegionSetKeyCtx': 1, 'keyframeRegionTrackCtx': 1, 'keyframeStats': 1, 'lassoContext': 1, 'lattice': 1, 'latticeDeformKeyCtx': 1, 'launch': 1, 'launchImageEditor': 1, 'layerButton': 1, 'layeredShaderPort': 1, 'layeredTexturePort': 1, 'layout': 1, 'layoutDialog': 1, 'lightList': 1, 'lightListEditor': 1, 'lightListPanel': 1, 'lightlink': 1, 'lineIntersection': 1, 'linearPrecision': 1, 'linstep': 1, 'listAnimatable': 1, 'listAttr': 1, 'listCameras': 1, 'listConnections': 1, 'listDeviceAttachments': 1, 'listHistory': 1, 'listInputDeviceAxes': 1, 'listInputDeviceButtons': 1, 'listInputDevices': 1, 'listMenuAnnotation': 1, 'listNodeTypes': 1, 'listPanelCategories': 1, 'listRelatives': 1, 'listSets': 1, 'listTransforms': 1, 'listUnselected': 1, 'listerEditor': 1, 'loadFluid': 1, 'loadNewShelf': 1, 'loadPlugin': 1, 'loadPluginLanguageResources': 1, 'loadPrefObjects': 1, 'localizedPanelLabel': 1, 'lockNode': 1, 'loft': 1, 'log': 1, 'longNameOf': 1, 'lookThru': 1, 'ls': 1, 'lsThroughFilter': 1, 'lsType': 1, 'lsUI': 1, 'Mayatomr': 1, 'mag': 1, 'makeIdentity': 1, 'makeLive': 1, 'makePaintable': 1, 'makeRoll': 1, 'makeSingleSurface': 1, 'makeTubeOn': 1, 'makebot': 1, 'manipMoveContext': 1, 'manipMoveLimitsCtx': 1, 'manipOptions': 1, 'manipRotateContext': 1, 'manipRotateLimitsCtx': 1, 'manipScaleContext': 1, 'manipScaleLimitsCtx': 1, 'marker': 1, 'match': 1, 'max': 1, 'memory': 1, 'menu': 1, 'menuBarLayout': 1, 'menuEditor': 1, 'menuItem': 1, 'menuItemToShelf': 1, 'menuSet': 1, 'menuSetPref': 1, 'messageLine': 1, 'min': 1, 'minimizeApp': 1, 'mirrorJoint': 1, 'modelCurrentTimeCtx': 1, 'modelEditor': 1, 'modelPanel': 1, 'mouse': 1, 'movIn': 1, 'movOut': 1, 'move': 1, 'moveIKtoFK': 1, 'moveKeyCtx': 1, 'moveVertexAlongDirection': 1, 'multiProfileBirailSurface': 1, 'mute': 1, 'nParticle': 1, 'nameCommand': 1, 'nameField': 1, 'namespace': 1, 'namespaceInfo': 1, 'newPanelItems': 1, 'newton': 1, 'nodeCast': 1, 'nodeIconButton': 1, 'nodeOutliner': 1, 'nodePreset': 1, 'nodeType': 1, 'noise': 1, 'nonLinear': 1, 'normalConstraint': 1, 'normalize': 1, 'nurbsBoolean': 1, 'nurbsCopyUVSet': 1, 'nurbsCube': 1, 'nurbsEditUV': 1, 'nurbsPlane': 1, 'nurbsSelect': 1, 'nurbsSquare': 1, 'nurbsToPoly': 1, 'nurbsToPolygonsPref': 1, 'nurbsToSubdiv': 1, 'nurbsToSubdivPref': 1, 'nurbsUVSet': 1, 'nurbsViewDirectionVector': 1, 'objExists': 1, 'objectCenter': 1, 'objectLayer': 1, 'objectType': 1, 'objectTypeUI': 1, 'obsoleteProc': 1, 'oceanNurbsPreviewPlane': 1, 'offsetCurve': 1, 'offsetCurveOnSurface': 1, 'offsetSurface': 1, 'openGLExtension': 1, 'openMayaPref': 1, 'optionMenu': 1, 'optionMenuGrp': 1, 'optionVar': 1, 'orbit': 1, 'orbitCtx': 1, 'orientConstraint': 1, 'outlinerEditor': 1, 'outlinerPanel': 1, 'overrideModifier': 1, 'paintEffectsDisplay': 1, 'pairBlend': 1, 'palettePort': 1, 'paneLayout': 1, 'panel': 1, 'panelConfiguration': 1, 'panelHistory': 1, 'paramDimContext': 1, 'paramDimension': 1, 'paramLocator': 1, 'parent': 1, 'parentConstraint': 1, 'particle': 1, 'particleExists': 1, 'particleInstancer': 1, 'particleRenderInfo': 1, 'partition': 1, 'pasteKey': 1, 'pathAnimation': 1, 'pause': 1, 'pclose': 1, 'percent': 1, 'performanceOptions': 1, 'pfxstrokes': 1, 'pickWalk': 1, 'picture': 1, 'pixelMove': 1, 'planarSrf': 1, 'plane': 1, 'play': 1, 'playbackOptions': 1, 'playblast': 1, 'plugAttr': 1, 'plugNode': 1, 'pluginInfo': 1, 'pluginResourceUtil': 1, 'pointConstraint': 1, 'pointCurveConstraint': 1, 'pointLight': 1, 'pointMatrixMult': 1, 'pointOnCurve': 1, 'pointOnSurface': 1, 'pointPosition': 1, 'poleVectorConstraint': 1, 'polyAppend': 1, 'polyAppendFacetCtx': 1, 'polyAppendVertex': 1, 'polyAutoProjection': 1, 'polyAverageNormal': 1, 'polyAverageVertex': 1, 'polyBevel': 1, 'polyBlendColor': 1, 'polyBlindData': 1, 'polyBoolOp': 1, 'polyBridgeEdge': 1, 'polyCacheMonitor': 1, 'polyCheck': 1, 'polyChipOff': 1, 'polyClipboard': 1, 'polyCloseBorder': 1, 'polyCollapseEdge': 1, 'polyCollapseFacet': 1, 'polyColorBlindData': 1, 'polyColorDel': 1, 'polyColorPerVertex': 1, 'polyColorSet': 1, 'polyCompare': 1, 'polyCone': 1, 'polyCopyUV': 1, 'polyCrease': 1, 'polyCreaseCtx': 1, 'polyCreateFacet': 1, 'polyCreateFacetCtx': 1, 'polyCube': 1, 'polyCut': 1, 'polyCutCtx': 1, 'polyCylinder': 1, 'polyCylindricalProjection': 1, 'polyDelEdge': 1, 'polyDelFacet': 1, 'polyDelVertex': 1, 'polyDuplicateAndConnect': 1, 'polyDuplicateEdge': 1, 'polyEditUV': 1, 'polyEditUVShell': 1, 'polyEvaluate': 1, 'polyExtrudeEdge': 1, 'polyExtrudeFacet': 1, 'polyExtrudeVertex': 1, 'polyFlipEdge': 1, 'polyFlipUV': 1, 'polyForceUV': 1, 'polyGeoSampler': 1, 'polyHelix': 1, 'polyInfo': 1, 'polyInstallAction': 1, 'polyLayoutUV': 1, 'polyListComponentConversion': 1, 'polyMapCut': 1, 'polyMapDel': 1, 'polyMapSew': 1, 'polyMapSewMove': 1, 'polyMergeEdge': 1, 'polyMergeEdgeCtx': 1, 'polyMergeFacet': 1, 'polyMergeFacetCtx': 1, 'polyMergeUV': 1, 'polyMergeVertex': 1, 'polyMirrorFace': 1, 'polyMoveEdge': 1, 'polyMoveFacet': 1, 'polyMoveFacetUV': 1, 'polyMoveUV': 1, 'polyMoveVertex': 1, 'polyNormal': 1, 'polyNormalPerVertex': 1, 'polyNormalizeUV': 1, 'polyOptUvs': 1, 'polyOptions': 1, 'polyOutput': 1, 'polyPipe': 1, 'polyPlanarProjection': 1, 'polyPlane': 1, 'polyPlatonicSolid': 1, 'polyPoke': 1, 'polyPrimitive': 1, 'polyPrism': 1, 'polyProjection': 1, 'polyPyramid': 1, 'polyQuad': 1, 'polyQueryBlindData': 1, 'polyReduce': 1, 'polySelect': 1, 'polySelectConstraint': 1, 'polySelectConstraintMonitor': 1, 'polySelectCtx': 1, 'polySelectEditCtx': 1, 'polySeparate': 1, 'polySetToFaceNormal': 1, 'polySewEdge': 1, 'polyShortestPathCtx': 1, 'polySmooth': 1, 'polySoftEdge': 1, 'polySphere': 1, 'polySphericalProjection': 1, 'polySplit': 1, 'polySplitCtx': 1, 'polySplitEdge': 1, 'polySplitRing': 1, 'polySplitVertex': 1, 'polyStraightenUVBorder': 1, 'polySubdivideEdge': 1, 'polySubdivideFacet': 1, 'polyToSubdiv': 1, 'polyTorus': 1, 'polyTransfer': 1, 'polyTriangulate': 1, 'polyUVSet': 1, 'polyUnite': 1, 'polyWedgeFace': 1, 'popen': 1, 'popupMenu': 1, 'pose': 1, 'pow': 1, 'preloadRefEd': 1, 'print': 1, 'progressBar': 1, 'progressWindow': 1, 'projFileViewer': 1, 'projectCurve': 1, 'projectTangent': 1, 'projectionContext': 1, 'projectionManip': 1, 'promptDialog': 1, 'propModCtx': 1, 'propMove': 1, 'psdChannelOutliner': 1, 'psdEditTextureFile': 1, 'psdExport': 1, 'psdTextureFile': 1, 'putenv': 1, 'pwd': 1, 'python': 1, 'querySubdiv': 1, 'quit': 1, 'rad_to_deg': 1, 'radial': 1, 'radioButton': 1, 'radioButtonGrp': 1, 'radioCollection': 1, 'radioMenuItemCollection': 1, 'rampColorPort': 1, 'rand': 1, 'randomizeFollicles': 1, 'randstate': 1, 'rangeControl': 1, 'readTake': 1, 'rebuildCurve': 1, 'rebuildSurface': 1, 'recordAttr': 1, 'recordDevice': 1, 'redo': 1, 'reference': 1, 'referenceEdit': 1, 'referenceQuery': 1, 'refineSubdivSelectionList': 1, 'refresh': 1, 'refreshAE': 1, 'registerPluginResource': 1, 'rehash': 1, 'reloadImage': 1, 'removeJoint': 1, 'removeMultiInstance': 1, 'removePanelCategory': 1, 'rename': 1, 'renameAttr': 1, 'renameSelectionList': 1, 'renameUI': 1, 'render': 1, 'renderGlobalsNode': 1, 'renderInfo': 1, 'renderLayerButton': 1, 'renderLayerParent': 1, 'renderLayerPostProcess': 1, 'renderLayerUnparent': 1, 'renderManip': 1, 'renderPartition': 1, 'renderQualityNode': 1, 'renderSettings': 1, 'renderThumbnailUpdate': 1, 'renderWindowEditor': 1, 'renderWindowSelectContext': 1, 'renderer': 1, 'reorder': 1, 'reorderDeformers': 1, 'requires': 1, 'reroot': 1, 'resampleFluid': 1, 'resetAE': 1, 'resetPfxToPolyCamera': 1, 'resetTool': 1, 'resolutionNode': 1, 'retarget': 1, 'reverseCurve': 1, 'reverseSurface': 1, 'revolve': 1, 'rgb_to_hsv': 1, 'rigidBody': 1, 'rigidSolver': 1, 'roll': 1, 'rollCtx': 1, 'rootOf': 1, 'rot': 1, 'rotate': 1, 'rotationInterpolation': 1, 'roundConstantRadius': 1, 'rowColumnLayout': 1, 'rowLayout': 1, 'runTimeCommand': 1, 'runup': 1, 'sampleImage': 1, 'saveAllShelves': 1, 'saveAttrPreset': 1, 'saveFluid': 1, 'saveImage': 1, 'saveInitialState': 1, 'saveMenu': 1, 'savePrefObjects': 1, 'savePrefs': 1, 'saveShelf': 1, 'saveToolSettings': 1, 'scale': 1, 'scaleBrushBrightness': 1, 'scaleComponents': 1, 'scaleConstraint': 1, 'scaleKey': 1, 'scaleKeyCtx': 1, 'sceneEditor': 1, 'sceneUIReplacement': 1, 'scmh': 1, 'scriptCtx': 1, 'scriptEditorInfo': 1, 'scriptJob': 1, 'scriptNode': 1, 'scriptTable': 1, 'scriptToShelf': 1, 'scriptedPanel': 1, 'scriptedPanelType': 1, 'scrollField': 1, 'scrollLayout': 1, 'sculpt': 1, 'searchPathArray': 1, 'seed': 1, 'selLoadSettings': 1, 'select': 1, 'selectContext': 1, 'selectCurveCV': 1, 'selectKey': 1, 'selectKeyCtx': 1, 'selectKeyframeRegionCtx': 1, 'selectMode': 1, 'selectPref': 1, 'selectPriority': 1, 'selectType': 1, 'selectedNodes': 1, 'selectionConnection': 1, 'separator': 1, 'setAttr': 1, 'setAttrEnumResource': 1, 'setAttrMapping': 1, 'setAttrNiceNameResource': 1, 'setConstraintRestPosition': 1, 'setDefaultShadingGroup': 1, 'setDrivenKeyframe': 1, 'setDynamic': 1, 'setEditCtx': 1, 'setEditor': 1, 'setFluidAttr': 1, 'setFocus': 1, 'setInfinity': 1, 'setInputDeviceMapping': 1, 'setKeyCtx': 1, 'setKeyPath': 1, 'setKeyframe': 1, 'setKeyframeBlendshapeTargetWts': 1, 'setMenuMode': 1, 'setNodeNiceNameResource': 1, 'setNodeTypeFlag': 1, 'setParent': 1, 'setParticleAttr': 1, 'setPfxToPolyCamera': 1, 'setPluginResource': 1, 'setProject': 1, 'setStampDensity': 1, 'setStartupMessage': 1, 'setState': 1, 'setToolTo': 1, 'setUITemplate': 1, 'setXformManip': 1, 'sets': 1, 'shadingConnection': 1, 'shadingGeometryRelCtx': 1, 'shadingLightRelCtx': 1, 'shadingNetworkCompare': 1, 'shadingNode': 1, 'shapeCompare': 1, 'shelfButton': 1, 'shelfLayout': 1, 'shelfTabLayout': 1, 'shellField': 1, 'shortNameOf': 1, 'showHelp': 1, 'showHidden': 1, 'showManipCtx': 1, 'showSelectionInTitle': 1, 'showShadingGroupAttrEditor': 1, 'showWindow': 1, 'sign': 1, 'simplify': 1, 'sin': 1, 'singleProfileBirailSurface': 1, 'size': 1, 'sizeBytes': 1, 'skinCluster': 1, 'skinPercent': 1, 'smoothCurve': 1, 'smoothTangentSurface': 1, 'smoothstep': 1, 'snap2to2': 1, 'snapKey': 1, 'snapMode': 1, 'snapTogetherCtx': 1, 'snapshot': 1, 'soft': 1, 'softMod': 1, 'softModCtx': 1, 'sort': 1, 'sound': 1, 'soundControl': 1, 'source': 1, 'spaceLocator': 1, 'sphere': 1, 'sphrand': 1, 'spotLight': 1, 'spotLightPreviewPort': 1, 'spreadSheetEditor': 1, 'spring': 1, 'sqrt': 1, 'squareSurface': 1, 'srtContext': 1, 'stackTrace': 1, 'startString': 1, 'startsWith': 1, 'stitchAndExplodeShell': 1, 'stitchSurface': 1, 'stitchSurfacePoints': 1, 'strcmp': 1, 'stringArrayCatenate': 1, 'stringArrayContains': 1, 'stringArrayCount': 1, 'stringArrayInsertAtIndex': 1, 'stringArrayIntersector': 1, 'stringArrayRemove': 1, 'stringArrayRemoveAtIndex': 1, 'stringArrayRemoveDuplicates': 1, 'stringArrayRemoveExact': 1, 'stringArrayToString': 1, 'stringToStringArray': 1, 'strip': 1, 'stripPrefixFromName': 1, 'stroke': 1, 'subdAutoProjection': 1, 'subdCleanTopology': 1, 'subdCollapse': 1, 'subdDuplicateAndConnect': 1, 'subdEditUV': 1, 'subdListComponentConversion': 1, 'subdMapCut': 1, 'subdMapSewMove': 1, 'subdMatchTopology': 1, 'subdMirror': 1, 'subdToBlind': 1, 'subdToPoly': 1, 'subdTransferUVsToCache': 1, 'subdiv': 1, 'subdivCrease': 1, 'subdivDisplaySmoothness': 1, 'substitute': 1, 'substituteAllString': 1, 'substituteGeometry': 1, 'substring': 1, 'surface': 1, 'surfaceSampler': 1, 'surfaceShaderList': 1, 'swatchDisplayPort': 1, 'switchTable': 1, 'symbolButton': 1, 'symbolCheckBox': 1, 'sysFile': 1, 'system': 1, 'tabLayout': 1, 'tan': 1, 'tangentConstraint': 1, 'texLatticeDeformContext': 1, 'texManipContext': 1, 'texMoveContext': 1, 'texMoveUVShellContext': 1, 'texRotateContext': 1, 'texScaleContext': 1, 'texSelectContext': 1, 'texSelectShortestPathCtx': 1, 'texSmudgeUVContext': 1, 'texWinToolCtx': 1, 'text': 1, 'textCurves': 1, 'textField': 1, 'textFieldButtonGrp': 1, 'textFieldGrp': 1, 'textManip': 1, 'textScrollList': 1, 'textToShelf': 1, 'textureDisplacePlane': 1, 'textureHairColor': 1, 'texturePlacementContext': 1, 'textureWindow': 1, 'threadCount': 1, 'threePointArcCtx': 1, 'timeControl': 1, 'timePort': 1, 'timerX': 1, 'toNativePath': 1, 'toggle': 1, 'toggleAxis': 1, 'toggleWindowVisibility': 1, 'tokenize': 1, 'tokenizeList': 1, 'tolerance': 1, 'tolower': 1, 'toolButton': 1, 'toolCollection': 1, 'toolDropped': 1, 'toolHasOptions': 1, 'toolPropertyWindow': 1, 'torus': 1, 'toupper': 1, 'trace': 1, 'track': 1, 'trackCtx': 1, 'transferAttributes': 1, 'transformCompare': 1, 'transformLimits': 1, 'translator': 1, 'trim': 1, 'trunc': 1, 'truncateFluidCache': 1, 'truncateHairCache': 1, 'tumble': 1, 'tumbleCtx': 1, 'turbulence': 1, 'twoPointArcCtx': 1, 'uiRes': 1, 'uiTemplate': 1, 'unassignInputDevice': 1, 'undo': 1, 'undoInfo': 1, 'ungroup': 1, 'uniform': 1, 'unit': 1, 'unloadPlugin': 1, 'untangleUV': 1, 'untitledFileName': 1, 'untrim': 1, 'upAxis': 1, 'updateAE': 1, 'userCtx': 1, 'uvLink': 1, 'uvSnapshot': 1, 'validateShelfName': 1, 'vectorize': 1, 'view2dToolCtx': 1, 'viewCamera': 1, 'viewClipPlane': 1, 'viewFit': 1, 'viewHeadOn': 1, 'viewLookAt': 1, 'viewManip': 1, 'viewPlace': 1, 'viewSet': 1, 'visor': 1, 'volumeAxis': 1, 'vortex': 1, 'waitCursor': 1, 'warning': 1, 'webBrowser': 1, 'webBrowserPrefs': 1, 'whatIs': 1, 'window': 1, 'windowPref': 1, 'wire': 1, 'wireContext': 1, 'workspace': 1, 'wrinkle': 1, 'wrinkleContext': 1, 'writeTake': 1, 'xbmLangPathList': 1, 'xform': 1
     }
  },
  modes: [
    // number
    hljs.C_NUMBER_MODE,
    // string
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    hljs.BACKSLASH_ESCAPE,
    {
      className: 'string',
      begin: '`', end: '`',
      contains: ['escape']
    },
    // variable
    {
      className: 'variable',
      begin: '\\$\\d', end: '^',
      relevance: 5
    },
    {
      className: 'variable',
      begin: '[\\$\\%\\@\\*](\\^\\w\\b|#\\w+|[^\\s\\w{]|{\\w+}|\\w+)', end: '^'
    },
    // array, $a[3] = {"a","b","c"}, $b[3] = {1,2,3}
    // vector, $test = <<3.0, 7.7, 9.1>>
    // matrix, matrix $a3[3][4] = <<2.5, 4.5, 3.25, 8.05; ... >>
    // param, -name ... -radius ...
    // operator, () [] ! ++ -- * / % ^ + - < <= > >= == != && || ? : = += -= *= /=
    // comment
    hljs.C_LINE_COMMENT_MODE,
    hljs.C_BLOCK_COMMENT_MODE
  ]
}
/*

Python profiler results (c) Brian Beck <exogen@gmail.com>

*/
hljs.LANGUAGES.profile = {
  defaultMode: {
    lexems: [hljs.UNDERSCORE_IDENT_RE],
    contains: ['number', 'builtin', 'filename', 'header', 'summary', 'string', 'function']
  },
  modes: [
    hljs.C_NUMBER_MODE,
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    {
      className: 'summary',
      begin: 'function calls', end: '$',
      contains: ['number'],
      relevance: 10
    },
    {
      className: 'header',
      begin: '(ncalls|tottime|cumtime)', end: '$',
      lexems: [hljs.IDENT_RE],
      keywords: {'ncalls': 1, 'tottime': 10, 'cumtime': 10, 'filename': 1},
      relevance: 10
    },
    {
      className: 'function',
      begin: '\\(', end: '\\)',
      lexems: [hljs.UNDERSCORE_IDENT_RE],
      contains: ['title']
    },
    {
      className: 'title',
      begin: hljs.UNDERSCORE_IDENT_RE, end: '^'
    },
    {
      className: 'builtin',
      begin: '{', end: '}',
      contains: ['string'],
      excludeBegin: true, excludeEnd: true
    },
    {
      className: 'filename',
      begin: '(/\w|[a-zA-Z_][\da-zA-Z_]+\\.[\da-zA-Z_]{1,3})', end: ':',
      excludeEnd: true
    }
  ]
};
/*

RenderMan Languages (c) Konstantin Evdokimenko <qewerty@gmail.com>

*/

hljs.LANGUAGES.rib  = {
  defaultMode: {
    lexems: [hljs.UNDERSCORE_IDENT_RE],
    illegal: '</',
    contains: ['comment', 'string', 'number'],
    keywords: {
      'keyword': {'ReadArchive': 1, 'FrameBegin': 1, 'FrameEnd': 1, 'WorldBegin': 1, 'WorldEnd': 1,
                  'Attribute': 1, 'Display': 1, 'Option': 1, 'Format': 1, 'ShadingRate': 1,
                  'PixelFilter': 1, 'PixelSamples': 1, 'Projection': 1, 'Scale': 1, 'ConcatTransform': 1,
                  'Transform': 1, 'Translate': 1, 'Rotate': 1,
                  'Surface': 1, 'Displacement': 1, 'Atmosphere': 1,
                  'Interior': 1, 'Exterior': 1},
      'commands': {'WorldBegin': 1, 'WorldEnd': 1, 'FrameBegin': 1, 'FrameEnd': 1,
                   'ReadArchive': 1, 'ShadingRate': 1}
    }
  },
  modes: [
    hljs.HASH_COMMENT_MODE,
    hljs.C_NUMBER_MODE,
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    hljs.BACKSLASH_ESCAPE
  ]
};

hljs.LANGUAGES.rsl  = {
  defaultMode: {
    lexems: [hljs.UNDERSCORE_IDENT_RE],
    illegal: '</',
    contains: ['comment', 'string', 'number', 'preprocessor',
               'shader', 'shading'],
    keywords: {
      'keyword': {'float': 1, 'color': 1, 'point': 1, 'normal': 1, 'vector': 1,
                  'matrix': 1, 'while': 1, 'for': 1, 'if': 1, 'do': 1,
                  'return': 1, 'else': 1, 'break': 1, 'extern': 1, 'continue': 1},
      'built_in': {'smoothstep': 1, 'calculatenormal': 1, 'faceforward': 1,
                   'normalize': 1, 'ambient': 1, 'diffuse': 1, 'specular': 1,
                   'visibility': 1}
    }
  },
  modes: [
    {
      className: 'shader',
      begin: 'surface |displacement |light |volume |imager ', end: '\\(',
      lexems: [hljs.IDENT_RE],
      keywords: {'surface': 1, 'displacement': 1, 'light': 1, 'volume': 1, 'imager': 1}
    },
    {
      className: 'shading',
      begin: 'illuminate|illuminance|gather', end: '\\(',
      lexems: [hljs.IDENT_RE],
      keywords: {'illuminate': 1, 'illuminance': 1, 'gather': 1}
    },
    hljs.C_LINE_COMMENT_MODE,
    hljs.C_BLOCK_COMMENT_MODE,
    hljs.C_NUMBER_MODE,
    hljs.QUOTE_STRING_MODE,
    hljs.APOS_STRING_MODE,
    hljs.BACKSLASH_ESCAPE,
    {
      className: 'preprocessor',
      begin: '#', end: '$'
    }
  ]
};
/*

Smalltalk definition (c) Vladimir Gubarkov <xonixx@gmail.com>

*/

hljs.SMALLTALK_KEYWORDS = {'self': 1, 'super': 1, 'nil': 1, 'true': 1, 'false': 1, 'thisContext': 1}; // only 6
hljs.VAR_IDENT_RE = '[a-z][a-zA-Z0-9_]*';

hljs.LANGUAGES.smalltalk = {
  defaultMode: {
    lexems: [hljs.UNDERSCORE_IDENT_RE],
    contains: ['comment', 'string', 'class', 'method',
                'number', 'symbol', 'char', 'localvars', 'array'],
    keywords: hljs.SMALLTALK_KEYWORDS
  },
  modes: [
    {
      className: 'class',
      begin: '\\b[A-Z][A-Za-z0-9_]*', end: '^',
      relevance: 0
    },
    {
      className: 'symbol',
      begin: '#' + hljs.UNDERSCORE_IDENT_RE, end: '^'
    },
    hljs.C_NUMBER_MODE,
    hljs.APOS_STRING_MODE,
    {
      className: 'comment',
      begin: '"', end: '"',
      relevance: 0
    },
    {
      className: 'method',
      begin: hljs.VAR_IDENT_RE+':', end:'^'
    },
    {
      className: 'char',
      begin: '\\$.{1}', end: '^'
    },
    {
      className: 'localvars',
      begin: '\\|\\s*(('+hljs.VAR_IDENT_RE+')\\s*)+\\|', end: '^',
      relevance: 10
    },
    {
      className: 'array',
      begin: '\\#\\(', end: '\\)',
      contains: ['string', 'char', 'number', 'symbol']
    }
  ]
};
hljs.SQL_KEYWORDS = {'all': 1, 'partial': 1, 'global': 1, 'month': 1, 'current_timestamp': 1, 'using': 1, 'go': 1, 'revoke': 1, 'smallint': 1, 'indicator': 1, 'end-exec': 1, 'disconnect': 1, 'zone': 1, 'with': 1, 'character': 1, 'assertion': 1, 'to': 1, 'add': 1, 'current_user': 1, 'usage': 1, 'input': 1, 'local': 1, 'alter': 1, 'match': 1, 'collate': 1, 'real': 1, 'then': 1, 'rollback': 1, 'get': 1, 'read': 1, 'timestamp': 1, 'session_user': 1, 'not': 1, 'integer': 1, 'bit': 1, 'unique': 1, 'day': 1, 'minute': 1, 'desc': 1, 'insert': 1, 'execute': 1, 'like': 1, 'level': 1, 'decimal': 1, 'drop': 1, 'continue': 1, 'isolation': 1, 'found': 1, 'where': 1, 'constraints': 1, 'domain': 1, 'right': 1, 'national': 1, 'some': 1, 'module': 1, 'transaction': 1, 'relative': 1, 'second': 1, 'connect': 1, 'escape': 1, 'close': 1, 'system_user': 1, 'for': 1, 'deferred': 1, 'section': 1, 'cast': 1, 'current': 1, 'sqlstate': 1, 'allocate': 1, 'intersect': 1, 'deallocate': 1, 'numeric': 1, 'public': 1, 'preserve': 1, 'full': 1, 'goto': 1, 'initially': 1, 'asc': 1, 'no': 1, 'key': 1, 'output': 1, 'collation': 1, 'group': 1, 'by': 1, 'union': 1, 'session': 1, 'both': 1, 'last': 1, 'language': 1, 'constraint': 1, 'column': 1, 'of': 1, 'space': 1, 'foreign': 1, 'deferrable': 1, 'prior': 1, 'connection': 1, 'unknown': 1, 'action': 1, 'commit': 1, 'view': 1, 'or': 1, 'first': 1, 'into': 1, 'float': 1, 'year': 1, 'primary': 1, 'cascaded': 1, 'except': 1, 'restrict': 1, 'set': 1, 'references': 1, 'names': 1, 'table': 1, 'outer': 1, 'open': 1, 'select': 1, 'size': 1, 'are': 1, 'rows': 1, 'from': 1, 'prepare': 1, 'distinct': 1, 'leading': 1, 'create': 1, 'only': 1, 'next': 1, 'inner': 1, 'authorization': 1, 'schema': 1, 'corresponding': 1, 'option': 1, 'declare': 1, 'precision': 1, 'immediate': 1, 'else': 1, 'timezone_minute': 1, 'external': 1, 'varying': 1, 'translation': 1, 'true': 1, 'case': 1, 'exception': 1, 'join': 1, 'hour': 1, 'default': 1, 'double': 1, 'scroll': 1, 'value': 1, 'cursor': 1, 'descriptor': 1, 'values': 1, 'dec': 1, 'fetch': 1, 'procedure': 1, 'delete': 1, 'and': 1, 'false': 1, 'int': 1, 'is': 1, 'describe': 1, 'char': 1, 'as': 1, 'at': 1, 'in': 1, 'varchar': 1, 'null': 1, 'trailing': 1, 'any': 1, 'absolute': 1, 'current_time': 1, 'end': 1, 'grant': 1, 'privileges': 1, 'when': 1, 'cross': 1, 'check': 1, 'write': 1, 'current_date': 1, 'pad': 1, 'begin': 1, 'temporary': 1, 'exec': 1, 'time': 1, 'update': 1, 'catalog': 1, 'user': 1, 'sql': 1, 'date': 1, 'on': 1, 'identity': 1, 'timezone_hour': 1, 'natural': 1, 'whenever': 1, 'interval': 1, 'work': 1, 'order': 1, 'cascade': 1, 'diagnostics': 1, 'nchar': 1, 'having': 1, 'left': 1};

hljs.LANGUAGES.sql =
{
  case_insensitive: true,
  defaultMode:
  {
    lexems: [hljs.IDENT_RE],
    contains: ['string', 'number', 'comment'],
    keywords: {
      'keyword': hljs.SQL_KEYWORDS,
      'aggregate': {'count': 1, 'sum': 1, 'min': 1, 'max': 1, 'avg': 1}
    }
  },

  modes: [
    hljs.C_NUMBER_MODE,
    hljs.C_BLOCK_COMMENT_MODE,
    {
      className: 'comment',
      begin: '--', end: '$'
    },
    {
      className: 'string',
      begin: '\'', end: '\'',
      contains: ['escape', 'squote'],
      relevance: 0
    },
    {
      className: 'squote',
      begin: '\'\'', end: '^'
    },
    {
      className: 'string',
      begin: '"', end: '"',
      contains: [ 'escape', 'dquote'],
      relevance: 0
    },
    {
      className: 'dquote',
      begin: '""', end: '^'
    },
    {
      className: 'string',
      begin: '`', end: '`',
      contains: ['escape']
    },
    hljs.BACKSLASH_ESCAPE
  ]
};
hljs.CPP_KEYWORDS = {
  'keyword': {'false': 1, 'int': 1, 'float': 1, 'while': 1, 'private': 1, 'char': 1, 'catch': 1, 'export': 1, 'virtual': 1, 'operator': 2, 'sizeof': 2, 'dynamic_cast': 2, 'typedef': 2, 'const_cast': 2, 'const': 1, 'struct': 1, 'for': 1, 'static_cast': 2, 'union': 1, 'namespace': 1, 'unsigned': 1, 'long': 1, 'throw': 1, 'volatile': 2, 'static': 1, 'protected': 1, 'bool': 1, 'template': 1, 'mutable': 1, 'if': 1, 'public': 1, 'friend': 2, 'do': 1, 'return': 1, 'goto': 1, 'auto': 1, 'void': 2, 'enum': 1, 'else': 1, 'break': 1, 'new': 1, 'extern': 1, 'using': 1, 'true': 1, 'class': 1, 'asm': 1, 'case': 1, 'typeid': 1, 'short': 1, 'reinterpret_cast': 2, 'default': 1, 'double': 1, 'register': 1, 'explicit': 1, 'signed': 1, 'typename': 1, 'try': 1, 'this': 1, 'switch': 1, 'continue': 1, 'wchar_t': 1, 'inline': 1, 'delete': 1},
  'built_in': {'std': 1, 'string': 1, 'cin': 1, 'cout': 1, 'cerr': 1, 'clog': 1, 'stringstream': 1, 'istringstream': 1, 'ostringstream': 1, 'auto_ptr': 1, 'deque': 1, 'list': 1, 'queue': 1, 'stack': 1, 'vector': 1, 'map': 1, 'set': 1, 'bitset': 1, 'multiset': 1, 'multimap': 1}
}
hljs.LANGUAGES.cpp = {
  defaultMode: {
    lexems: [hljs.UNDERSCORE_IDENT_RE],
    illegal: '</',
    contains: ['comment', 'string', 'number', 'preprocessor', 'stl_container'],
    keywords: hljs.CPP_KEYWORDS
  },
  modes: [
    hljs.C_LINE_COMMENT_MODE,
    hljs.C_BLOCK_COMMENT_MODE,
    hljs.C_NUMBER_MODE,
    hljs.QUOTE_STRING_MODE,
    hljs.BACKSLASH_ESCAPE,
    {
      className: 'string',
      begin: '\'', end: '[^\\\\]\'',
      illegal: '[^\\\\][^\']'
    },
    {
      className: 'preprocessor',
      begin: '#', end: '$'
    },
    {
      className: 'stl_container',
      begin: '\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap)\\s*<', end: '>',
      contains: ['stl_container'],
      lexems: [hljs.UNDERSCORE_IDENT_RE],
      keywords: hljs.CPP_KEYWORDS,
      relevance: 10
    }
  ]
};


/*

Java definition (с) Vsevolod Solovyov <vsevolod.solovyov@gmail.com>

*/
hljs.LANGUAGES.java  = {
  defaultMode: {
    lexems: [hljs.UNDERSCORE_IDENT_RE],
    contains: ['javadoc', 'comment', 'string', 'class', 'number', 'annotation'],
    keywords: {'false': 1, 'synchronized': 1, 'int': 1, 'abstract': 1, 'float': 1, 'private': 1, 'char': 1, 'interface': 1, 'boolean': 1, 'static': 1, 'null': 1, 'if': 1, 'const': 1, 'for': 1, 'true': 1, 'while': 1, 'long': 1, 'throw': 1, 'strictfp': 1, 'finally': 1, 'protected': 1, 'extends': 1, 'import': 1, 'native': 1, 'final': 1, 'implements': 1, 'return': 1, 'void': 1, 'enum': 1, 'else': 1, 'break': 1, 'transient': 1, 'new': 1, 'catch': 1, 'instanceof': 1, 'byte': 1, 'super': 1, 'class': 1, 'volatile': 1, 'case': 1, 'assert': 1, 'short': 1, 'package': 1, 'default': 1, 'double': 1, 'public': 1, 'try': 1, 'this': 1, 'switch': 1, 'continue': 1, 'throws': 1}
  },
  modes: [
    {
      className: 'class',
      lexems: [hljs.UNDERSCORE_IDENT_RE],
      begin: '(class |interface )', end: '{', 
      illegal: ':',
      keywords: {'class': 1, 'interface': 1},
      contains: ['inheritance', 'title']
    },
    {
      className: 'inheritance',
      begin: '(implements|extends)', end: '^',
      lexems: [hljs.IDENT_RE],
      keywords: {'extends': 1, 'implements': 1},
      relevance: 10
    },
    {
      className: 'title',
      begin: hljs.UNDERSCORE_IDENT_RE, end: '^'
    },
    {
      className: 'params',
      begin: '\\(', end: '\\)',
      contains: ['string', 'annotation']
    },
    hljs.C_NUMBER_MODE,
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    hljs.BACKSLASH_ESCAPE,
    hljs.C_LINE_COMMENT_MODE,
    {
      className: 'javadoc',
      begin: '/\\*\\*', end: '\\*/',
      contains: ['javadoctag'],
      relevance: 10
    },
    {
      className: 'javadoctag',
      begin: '@[A-Za-z]+', end: '^'
    },
    hljs.C_BLOCK_COMMENT_MODE,
    {
      className: 'annotation',
      begin: '@[A-Za-z]+', end: '^'
    }
  ]
};


hljs.DELPHI_KEYWORDS = {'and': 1, 'safecall': 1, 'cdecl': 1, 'then': 1, 'string': 1, 'exports': 1, 'library': 1, 'not': 1, 'pascal': 1, 'set': 1, 'virtual': 1, 'file': 1, 'in': 1, 'array': 1, 'label': 1, 'packed': 1, 'end.': 1, 'index': 1, 'while': 1, 'const': 1, 'raise': 1, 'for': 1, 'to': 1, 'implementation': 1, 'with': 1, 'except': 1, 'overload': 1, 'destructor': 1, 'downto': 1, 'finally': 1, 'program': 1, 'exit': 1, 'unit': 1, 'inherited': 1, 'override': 1, 'if': 1, 'type': 1, 'until': 1, 'function': 1, 'do': 1, 'begin': 1, 'repeat': 1, 'goto': 1, 'nil': 1, 'far': 1, 'initialization': 1, 'object': 1, 'else': 1, 'var': 1, 'uses': 1, 'external': 1, 'resourcestring': 1, 'interface': 1, 'end': 1, 'finalization': 1, 'class': 1, 'asm': 1, 'mod': 1, 'case': 1, 'on': 1, 'shr': 1, 'shl': 1, 'of': 1, 'register': 1, 'xorwrite': 1, 'threadvar': 1, 'try': 1, 'record': 1, 'near': 1, 'stored': 1, 'constructor': 1, 'stdcall': 1, 'inline': 1, 'div': 1, 'out': 1, 'or': 1, 'procedure': 1};
hljs.DELPHI_CLASS_KEYWORDS = {'safecall': 1, 'stdcall': 1, 'pascal': 1, 'stored': 1, 'const': 1, 'implementation': 1, 'finalization': 1, 'except': 1, 'to': 1, 'finally': 1, 'program': 1, 'inherited': 1, 'override': 1, 'then': 1, 'exports': 1, 'string': 1, 'read': 1, 'not': 1, 'mod': 1, 'shr': 1, 'try': 1, 'div': 1, 'shl': 1, 'set': 1, 'library': 1, 'message': 1, 'packed': 1, 'index': 1, 'for': 1, 'near': 1, 'overload': 1, 'label': 1, 'downto': 1, 'exit': 1, 'public': 1, 'goto': 1, 'interface': 1, 'asm': 1, 'on': 1, 'of': 1, 'constructor': 1, 'or': 1, 'private': 1, 'array': 1, 'unit': 1, 'raise': 1, 'destructor': 1, 'var': 1, 'type': 1, 'until': 1, 'function': 1, 'else': 1, 'external': 1, 'with': 1, 'case': 1, 'default': 1, 'record': 1, 'while': 1, 'protected': 1, 'property': 1, 'procedure': 1, 'published': 1, 'and': 1, 'cdecl': 1, 'do': 1, 'threadvar': 1, 'file': 1, 'in': 1, 'if': 1, 'end': 1, 'virtual': 1, 'write': 1, 'far': 1, 'out': 1, 'begin': 1, 'repeat': 1, 'nil': 1, 'initialization': 1, 'object': 1, 'uses': 1, 'resourcestring': 1, 'class': 1, 'register': 1, 'xorwrite': 1, 'inline': 1};

hljs.LANGUAGES.delphi = {
  defaultMode: {
    lexems: [hljs.IDENT_RE],
    illegal: '("|\\$[G-Zg-z]|\\/\\*|</)',
    contains: ['comment', 'string', 'number', 'function', 'class'],
    keywords: hljs.DELPHI_KEYWORDS
  },
  case_insensitive: true,
  modes: [
    {
      className: 'comment',
      begin: '{', end: '}'
    },
    {
      className: 'comment',
      begin: '\\(\\*', end: '\\*\\)',
      relevance: 10
    },
    hljs.C_LINE_COMMENT_MODE,
    {
      className: 'number',
      begin: hljs.NUMBER_RE, end: '^',
      relevance: 0
    },
    {
      className: 'string',
      begin: '\'', end: '\'',
      contains: ['quote'],
      relevance: 0
    },
    {
      className: 'string',
      begin: '(#\\d+)+', end: '^'
    },
    {
      className: 'quote',
      begin: '\'\'', end: '^'
    },
    {
      className: 'function',
      begin: 'function', end: '[:;]',
      lexems: [hljs.IDENT_RE],
      keywords: {'function': 1},
      contains: ['title', 'params', 'comment'],
      relevance: 0
    },
    {
      className: 'function',
      begin: '(procedure|constructor|destructor)', end: ';',
      lexems: [hljs.IDENT_RE],
      keywords: {'constructor': 1, 'destructor': 1, 'procedure': 1},
      contains: ['title', 'params', 'comment'],
      relevance: 10
    },
    {
      className: 'title',
      begin: hljs.IDENT_RE, end: '^'
    },
    {
      className: 'params',
      begin: '\\(', end: '\\)',
      lexems: [hljs.IDENT_RE],
      keywords: hljs.DELPHI_KEYWORDS,
      contains: ['string']
    },
    {
      className: 'class',
      begin: '=\\s*class', end: 'end;',
      lexems: [hljs.IDENT_RE],
      keywords: hljs.DELPHI_CLASS_KEYWORDS,
      contains: ['string', 'comment', 'function']
    }
  ]
};
/*

VBScript definition (c) Nikita Ledyaev <lenikita@yandex.ru>

*/
hljs.LANGUAGES.vbscript = {
  defaultMode: {
    lexems: [hljs.IDENT_RE],
    contains: ['string', 'comment', 'number', 'built_in'],
    keywords: {
      'keyword': {'call' : 1,'class' : 1,'const' : 1,'dim' : 1,'do' : 1,'loop' : 1,'erase' : 1,'execute' : 1,'executeglobal' : 1,'exit' : 1,'for' : 1,'each' : 1,'next' : 1,'function' : 1,'if' : 1,'then' : 1,'else' : 1,'on' : 1, 'error' : 1,'option' : 1, 'explicit' : 1,'private' : 1,'property' : 1,'let' : 1,'get' : 1,'public' : 1,'randomize' : 1,'redim' : 1,'rem' : 1,'select' : 1,'case' : 1,'set' : 1,'stop' : 1,'sub' : 1,'while' : 1,'wend' : 1,'with' : 1, 'end' : 1, 'to' : 1},
      'built_in': {'lcase': 1, 'month': 1, 'vartype': 1, 'instrrev': 1, 'ubound': 1, 'setlocale': 1, 'getobject': 1, 'rgb': 1, 'getref': 1, 'string': 1, 'weekdayname': 1, 'rnd': 1, 'dateadd': 1, 'monthname': 1, 'now': 1, 'day': 1, 'minute': 1, 'isarray': 1, 'cbool': 1, 'round': 1, 'formatcurrency': 1, 'conversions': 1, 'csng': 1, 'timevalue': 1, 'second': 1, 'year': 1, 'space': 1, 'abs': 1, 'clng': 1, 'timeserial': 1, 'fixs': 1, 'len': 1, 'asc': 1, 'isempty': 1, 'maths': 1, 'dateserial': 1, 'atn': 1, 'timer': 1, 'isobject': 1, 'filter': 1, 'weekday': 1, 'datevalue': 1, 'ccur': 1, 'isdate': 1, 'instr': 1, 'datediff': 1, 'formatdatetime': 1, 'replace': 1, 'isnull': 1, 'right': 1, 'sgn': 1, 'array': 1, 'snumeric': 1, 'log': 1, 'cdbl': 1, 'hex': 1, 'chr': 1, 'lbound': 1, 'msgbox': 1, 'ucase': 1, 'getlocale': 1, 'cos': 1, 'cdate': 1, 'cbyte': 1, 'rtrim': 1, 'join': 1, 'hour': 1, 'oct': 1, 'typename': 1, 'trim': 1, 'strcomp': 1, 'int': 1, 'createobject': 1, 'loadpicture': 1, 'tan': 1, 'formatnumber': 1, 'mid': 1, 'scriptenginebuildversion': 1, 'scriptengine': 1, 'split': 1, 'scriptengineminorversion': 1, 'cint': 1, 'sin': 1, 'datepart': 1, 'ltrim': 1, 'sqr': 1, 'scriptenginemajorversion': 1, 'time': 1, 'derived': 1, 'eval': 1, 'date': 1, 'formatpercent': 1, 'exp': 1, 'inputbox': 1, 'left': 1}
    }
  },
  case_insensitive: true,
  modes: [
    hljs.QUOTE_STRING_MODE,
    hljs.BACKSLASH_ESCAPE,
    {
      className: 'comment',
      begin: '\'', end: '$'
    },
    hljs.C_NUMBER_MODE
  ]
};
hljs.XML_COMMENT = {
  className: 'comment',
  begin: '<!--', end: '-->'
};
hljs.XML_ATTR = {
  className: 'attribute',
  begin: ' [a-zA-Z\\:-]+=', end: '^',
  contains: ['value']
};
hljs.XML_VALUE = {
  className: 'value',
  begin: '"', end: '"'
};

hljs.LANGUAGES.xml = {
  defaultMode: {
    contains: ['pi', 'comment', 'cdata', 'tag']
  },
  case_insensitive: true,
  modes: [
    {
      className: 'pi',
      begin: '<\\?', end: '\\?>',
      relevance: 10
    },
    hljs.XML_COMMENT,
    {
      className: 'cdata',
      begin: '<\\!\\[CDATA\\[', end: '\\]\\]>'
    },
    {
      className: 'tag',
      begin: '</?', end: '>',
      contains: ['title', 'tag_internal'],
      relevance: 1.5
    },
    {
      className: 'title',
      begin: '[A-Za-z:_][A-Za-z0-9\\._:-]+', end: '^',
      relevance: 0
    },
    {
      className: 'tag_internal',
      begin: '^', endsWithParent: true,
      contains: ['attribute'],
      relevance: 0,
      illegal: '[\\+\\.]'
    },
    hljs.XML_ATTR,
    hljs.XML_VALUE
  ]
};

hljs.HTML_TAGS = {'code': 1, 'kbd': 1, 'font': 1, 'noscript': 1, 'style': 1, 'img': 1, 'title': 1, 'menu': 1, 'tt': 1, 'tr': 1, 'param': 1, 'li': 1, 'tfoot': 1, 'th': 1, 'input': 1, 'td': 1, 'dl': 1, 'blockquote': 1, 'fieldset': 1, 'big': 1, 'dd': 1, 'abbr': 1, 'optgroup': 1, 'dt': 1, 'button': 1, 'isindex': 1, 'p': 1, 'small': 1, 'div': 1, 'dir': 1, 'em': 1, 'frame': 1, 'meta': 1, 'sub': 1, 'bdo': 1, 'label': 1, 'acronym': 1, 'sup': 1, 'body': 1, 'xml': 1, 'basefont': 1, 'base': 1, 'br': 1, 'address': 1, 'strong': 1, 'legend': 1, 'ol': 1, 'script': 1, 'caption': 1, 's': 1, 'col': 1, 'h2': 1, 'h3': 1, 'h1': 1, 'h6': 1, 'h4': 1, 'h5': 1, 'table': 1, 'select': 1, 'noframes': 1, 'span': 1, 'area': 1, 'dfn': 1, 'strike': 1, 'cite': 1, 'thead': 1, 'head': 1, 'option': 1, 'form': 1, 'hr': 1, 'var': 1, 'link': 1, 'b': 1, 'colgroup': 1, 'ul': 1, 'applet': 1, 'del': 1, 'iframe': 1, 'pre': 1, 'frameset': 1, 'ins': 1, 'tbody': 1, 'html': 1, 'samp': 1, 'map': 1, 'object': 1, 'a': 1, 'xmlns': 1, 'center': 1, 'textarea': 1, 'i': 1, 'q': 1, 'u': 1};
hljs.HTML_DOCTYPE = {
  className: 'doctype',
  begin: '<!DOCTYPE', end: '>',
  relevance: 10
};
hljs.HTML_ATTR = {
  className: 'attribute',
  begin: ' [a-zA-Z]+', end: '^'
};
hljs.HTML_VALUE = {
  className: 'value',
  begin: '[a-zA-Z0-9]+', end: '^'
};

hljs.LANGUAGES.html = {
  defaultMode: {
    contains: ['tag', 'comment', 'doctype', 'vbscript']
  },
  case_insensitive: true,
  modes: [
    hljs.XML_COMMENT,
    hljs.HTML_DOCTYPE,
    {
      className: 'tag',
      lexems: [hljs.IDENT_RE],
      keywords: hljs.HTML_TAGS,
      begin: '<style', end: '>',
      contains: ['attribute'],
      illegal: '[\\+\\.]',
      starts: 'css'
    },
    {
      className: 'tag',
      lexems: [hljs.IDENT_RE],
      keywords: hljs.HTML_TAGS,
      begin: '<script', end: '>',
      contains: ['attribute'],
      illegal: '[\\+\\.]',
      starts: 'javascript'
    },
    {
      className: 'tag',
      lexems: [hljs.IDENT_RE],
      keywords: hljs.HTML_TAGS,
      begin: '<[A-Za-z/]', end: '>',
      contains: ['attribute'],
      illegal: '[\\+\\.]'
    },
    {
      className: 'css',
      end: '</style>', returnEnd: true,
      subLanguage: 'css'
    },
    {
      className: 'javascript',
      end: '</script>', returnEnd: true,
      subLanguage: 'javascript'
    },
    hljs.XML_ATTR,
    hljs.HTML_ATTR,
    hljs.XML_VALUE,
    hljs.HTML_VALUE,
    {
      className: 'vbscript',
      begin: '<%', end: '%>',
      subLanguage: 'vbscript'
    }
  ]
};

hljs.LANGUAGES.css = {
  defaultMode: {
    contains: ['id', 'class', 'attr_selector', 'rules', 'comment'],
    keywords: hljs.HTML_TAGS,
    lexems: [hljs.IDENT_RE],
    illegal: '='
  },
  case_insensitive: true,
  modes: [
    {
      className: 'id',
      begin: '\\#[A-Za-z0-9_-]+', end: '^'
    },
    {
      className: 'class',
      begin: '\\.[A-Za-z0-9_-]+', end: '^',
      relevance: 0
    },
    {
      className: 'attr_selector',
      begin: '\\[', end: '\\]',
      illegal: '$'
    },
    {
      className: 'rules',
      begin: '{', end: '}',
      contains: ['rule', 'comment'],
      illegal: '[^\\s]'
    },
    {
      className: 'rule',
      begin: '[A-Z\\_\\.\\-]+\\s*:', end: ';', endsWithParent: true,
      lexems: ['[A-Za-z-]+'],
      keywords: {'play-during': 1, 'counter-reset': 1, 'counter-increment': 1, 'min-height': 1, 'quotes': 1, 'border-top': 1, 'pitch': 1, 'font': 1, 'pause': 1, 'list-style-image': 1, 'border-width': 1, 'cue': 1, 'outline-width': 1, 'border-left': 1, 'elevation': 1, 'richness': 1, 'speech-rate': 1, 'border-bottom': 1, 'border-spacing': 1, 'background': 1, 'list-style-type': 1, 'text-align': 1, 'page-break-inside': 1, 'orphans': 1, 'page-break-before': 1, 'text-transform': 1, 'line-height': 1, 'padding-left': 1, 'font-size': 1, 'right': 1, 'word-spacing': 1, 'padding-top': 1, 'outline-style': 1, 'bottom': 1, 'content': 1, 'border-right-style': 1, 'padding-right': 1, 'border-left-style': 1, 'voice-family': 1, 'background-color': 1, 'border-bottom-color': 1, 'outline-color': 1, 'unicode-bidi': 1, 'max-width': 1, 'font-family': 1, 'caption-side': 1, 'border-right-width': 1, 'pause-before': 1, 'border-top-style': 1, 'color': 1, 'border-collapse': 1, 'border-bottom-width': 1, 'float': 1, 'height': 1, 'max-height': 1, 'margin-right': 1, 'border-top-width': 1, 'speak': 1, 'speak-header': 1, 'top': 1, 'cue-before': 1, 'min-width': 1, 'width': 1, 'font-variant': 1, 'border-top-color': 1, 'background-position': 1, 'empty-cells': 1, 'direction': 1, 'border-right': 1, 'visibility': 1, 'padding': 1, 'border-style': 1, 'background-attachment': 1, 'overflow': 1, 'border-bottom-style': 1, 'cursor': 1, 'margin': 1, 'display': 1, 'border-left-width': 1, 'letter-spacing': 1, 'vertical-align': 1, 'clip': 1, 'border-color': 1, 'list-style': 1, 'padding-bottom': 1, 'pause-after': 1, 'speak-numeral': 1, 'margin-left': 1, 'widows': 1, 'border': 1, 'font-style': 1, 'border-left-color': 1, 'pitch-range': 1, 'background-repeat': 1, 'table-layout': 1, 'margin-bottom': 1, 'speak-punctuation': 1, 'font-weight': 1, 'border-right-color': 1, 'page-break-after': 1, 'position': 1, 'white-space': 1, 'text-indent': 1, 'background-image': 1, 'volume': 1, 'stress': 1, 'outline': 1, 'clear': 1, 'z-index': 1, 'text-decoration': 1, 'margin-top': 1, 'azimuth': 1, 'cue-after': 1, 'left': 1, 'list-style-position': 1},
      contains: ['value']
    },
    hljs.C_BLOCK_COMMENT_MODE,
    {
      className: 'value',
      begin: '^', endsWithParent: true, excludeEnd: true,
      contains: ['function', 'number', 'hexcolor', 'string']
    },
    {
      className: 'number',
      begin: hljs.NUMBER_RE, end: '^'
    },
    {
      className: 'hexcolor',
      begin: '\\#[0-9A-F]+', end: '^'
    },
    {
      className: 'function',
      begin: hljs.IDENT_RE + '\\(', end: '\\)',
      contains: ['params']
    },
    {
      className: 'params',
      begin: '^', endsWithParent: true, excludeEnd: true,
      contains: ['number', 'string']
    },
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE
  ]
};

hljs.LANGUAGES.django = {
  defaultMode: {
    contains: ['tag', 'comment', 'doctype', 'template_comment', 'template_tag', 'variable']
  },
  case_insensitive: true,
  modes: [
    hljs.XML_COMMENT,
    hljs.HTML_DOCTYPE,
    {
      className: 'tag',
      lexems: [hljs.IDENT_RE],
      keywords: hljs.HTML_TAGS,
      begin: '<[A-Za-z/]', end: '>',
      contains: ['attribute', 'template_comment', 'template_tag', 'variable']
    },
    hljs.XML_ATTR,
    hljs.HTML_ATTR,
    {
      className: 'value',
      begin: '"', end: '"',
      contains: ['template_comment', 'template_tag', 'variable']
    },
    hljs.HTML_VALUE,
    {
      className: 'template_comment',
      begin: '\\{\\%\\s*comment\\s*\\%\\}', end: '\\{\\%\\s*endcomment\\s*\\%\\}'
    },
    {
      className: 'template_comment',
      begin: '\\{#', end: '#\\}'
    },
    {
      className: 'template_tag',
      begin: '\\{\\%', end: '\\%\\}',
      lexems: [hljs.IDENT_RE],
      keywords: {'comment': 1, 'endcomment': 1, 'load': 1, 'templatetag': 1, 'ifchanged': 1, 'endifchanged': 1, 'if': 1, 'endif': 1, 'firstof': 1, 'for': 1, 'endfor': 1, 'in': 1, 'ifnotequal': 1, 'endifnotequal': 1, 'widthratio': 1, 'extends': 1, 'include': 1, 'spaceless': 1, 'endspaceless': 1, 'regroup': 1, 'by': 1, 'as': 1, 'ifequal': 1, 'endifequal': 1, 'ssi': 1, 'now': 1, 'with': 1, 'cycle': 1, 'url': 1, 'filter': 1, 'endfilter': 1, 'debug': 1, 'block': 1, 'endblock': 1, 'else': 1},
      contains: ['filter']
    },
    {
      className: 'variable',
      begin: '\\{\\{', end: '\\}\\}',
      contains: ['filter']
    },
    {
      className: 'filter',
      begin: '\\|[A-Za-z]+\\:?', end: '^', excludeEnd: true,
      lexems: [hljs.IDENT_RE],
      keywords: {'truncatewords': 1, 'removetags': 1, 'linebreaksbr': 1, 'yesno': 1, 'get_digit': 1, 'timesince': 1, 'random': 1, 'striptags': 1, 'filesizeformat': 1, 'escape': 1, 'linebreaks': 1, 'length_is': 1, 'ljust': 1, 'rjust': 1, 'cut': 1, 'urlize': 1, 'fix_ampersands': 1, 'title': 1, 'floatformat': 1, 'capfirst': 1, 'pprint': 1, 'divisibleby': 1, 'add': 1, 'make_list': 1, 'unordered_list': 1, 'urlencode': 1, 'timeuntil': 1, 'urlizetrunc': 1, 'wordcount': 1, 'stringformat': 1, 'linenumbers': 1, 'slice': 1, 'date': 1, 'dictsort': 1, 'dictsortreversed': 1, 'default_if_none': 1, 'pluralize': 1, 'lower': 1, 'join': 1, 'center': 1, 'default': 1, 'truncatewords_html': 1, 'upper': 1, 'length': 1, 'phone2numeric': 1, 'wordwrap': 1, 'time': 1, 'addslashes': 1, 'slugify': 1, 'first': 1},
      contains: ['argument']
    },
    {
      className: 'argument',
      begin: '"', end: '"'
    }
  ]
};
