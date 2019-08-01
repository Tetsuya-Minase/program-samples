import 'package:dart_sample/dart_sample.dart' as dart_sample;
import 'package:dart_sample/variables_sample.dart' as variable_sample;
import 'package:dart_sample/control_sample.dart' as control_sample;
import 'package:dart_sample/function_sample.dart' as function_sample;
import 'package:dart_sample/class_sample.dart';

main(List<String> arguments) {
  print('Hello world: ${dart_sample.calculate()}!');
  variable_sample.setVariables();
  print(control_sample.checkNull(null));
  print(function_sample.closure(10));
  print(function_sample.namedParameter(firstName: 'hoge', lastName: 'huga'));
  final sampleClass = SampleClass('myName', 100);
  print('name: ${sampleClass.name} / age: ${sampleClass.age}');
  final sampleClass2 = SampleClass.initialized();
  sampleClass2.selfIntroduction();
}
