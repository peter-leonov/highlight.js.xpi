#!/usr/bin/env ruby

# проверим предположения
Kernel.included_modules.empty?					or fail "Kernel must be empty"
Object.included_modules == [Kernel]				or fail "Object mixes in not only Kernel module"
Enumerable.included_modules.empty?				or fail "Enumerable must be empty"
Array.included_modules == [Enumerable, Kernel]	or fail "Array must mix in Enumerable and Kernel modules"
Hash.included_modules == [Enumerable, Kernel]	or fail "Hash must mix in Enumerable and Kernel modules"

m = []
[
	Kernel,
	Object,
	Module,
	Enumerable,
	Array,
	Hash,
	String,
	Proc,
	Integer,
	IO
].each {|v| m += v.instance_methods + v.methods}

#k = Kernel.instance_methods(false)
#o = Object.instance_methods(false)
#m = Module.instance_methods(false)
#e = Enumerable.instance_methods(false)
#a = Array.instance_methods(false)
#h = Hash.instance_methods(false)

res = m.uniq.sort.grep(/^[a-z_][\w\?\!]+$/).map {|v| "'#{v}': 1"}.join(', ')

print "
	'methods': {#{res}}
"
