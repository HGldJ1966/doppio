import runtime = require('../runtime');
import java_object = require('../java_object');
import logging = require('../logging');
import ClassData = require('../ClassData');
import gLong = require('../gLong');
import util = require('../util');
import exceptions = require('../exceptions');

class sun_management_MemoryImpl {

  public static 'getMemoryPools0()[Ljava/lang/management/MemoryPoolMXBean;'(rs: runtime.RuntimeState): java_object.JavaArray {
    // XXX may want to revisit this 'NOP'
    return new java_object.JavaArray(rs, <ClassData.ArrayClassData> rs.get_bs_class('[Lsun/management/MemoryPoolImpl;'), []);
  }

  public static 'getMemoryManagers0()[Ljava/lang/management/MemoryManagerMXBean;'(rs: runtime.RuntimeState): java_object.JavaArray {
    // XXX may want to revisit this 'NOP'
    return new java_object.JavaArray(rs, <ClassData.ArrayClassData> rs.get_bs_class('[Lsun/management/MemoryManagerImpl;'), []);
  }

  public static 'getMemoryUsage0(Z)Ljava/lang/management/MemoryUsage;'(rs: runtime.RuntimeState, javaThis: java_object.JavaObject, arg0: number): java_object.JavaObject {
    rs.java_throw(<ClassData.ReferenceClassData> rs.get_bs_class('Ljava/lang/UnsatisfiedLinkError;'), 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return null;
  }

  public static 'setVerboseGC(Z)V'(rs: runtime.RuntimeState, javaThis: java_object.JavaObject, arg0: number): void {
    rs.java_throw(<ClassData.ReferenceClassData> rs.get_bs_class('Ljava/lang/UnsatisfiedLinkError;'), 'Native method not implemented.');
  }

}

class sun_management_VMManagementImpl {

  public static 'getVersion0()Ljava/lang/String;'(rs: runtime.RuntimeState): java_object.JavaObject {
    return rs.init_string("1.2", true);
  }

  public static 'initOptionalSupportFields()V'(rs: runtime.RuntimeState): void {
    var i: number,
      field_names = ['compTimeMonitoringSupport', 'threadContentionMonitoringSupport', 'currentThreadCpuTimeSupport', 'otherThreadCpuTimeSupport', 'bootClassPathSupport', 'objectMonitorUsageSupport', 'synchronizerUsageSupport'],
      vm_management_impl = <ClassData.ReferenceClassData> rs.get_bs_class('Lsun/management/VMManagementImpl;');
    // set everything to false
    for (i = 0; i < field_names.length; i++) {
      var name = field_names[i];
      vm_management_impl.static_put(rs, name, 0);
    }
  }

  public static 'isThreadContentionMonitoringEnabled()Z'(rs: runtime.RuntimeState, javaThis: java_object.JavaObject): boolean {
    return false;
  }

  public static 'isThreadCpuTimeEnabled()Z'(rs: runtime.RuntimeState, javaThis: java_object.JavaObject): boolean {
    return false;
  }

  public static 'getTotalClassCount()J'(rs: runtime.RuntimeState, javaThis: java_object.JavaObject): gLong {
    rs.java_throw(<ClassData.ReferenceClassData> rs.get_bs_class('Ljava/lang/UnsatisfiedLinkError;'), 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return null;
  }

  public static 'getUnloadedClassCount()J'(rs: runtime.RuntimeState, javaThis: java_object.JavaObject): gLong {
    rs.java_throw(<ClassData.ReferenceClassData> rs.get_bs_class('Ljava/lang/UnsatisfiedLinkError;'), 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return null;
  }

  public static 'getVerboseClass()Z'(rs: runtime.RuntimeState, javaThis: java_object.JavaObject): number {
    rs.java_throw(<ClassData.ReferenceClassData> rs.get_bs_class('Ljava/lang/UnsatisfiedLinkError;'), 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return 0;
  }

  public static 'getVerboseGC()Z'(rs: runtime.RuntimeState, javaThis: java_object.JavaObject): number {
    rs.java_throw(<ClassData.ReferenceClassData> rs.get_bs_class('Ljava/lang/UnsatisfiedLinkError;'), 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return 0;
  }

  public static 'getProcessId()I'(rs: runtime.RuntimeState, javaThis: java_object.JavaObject): number {
    return 1;
  }

  public static 'getVmArguments0()[Ljava/lang/String;'(rs: runtime.RuntimeState, javaThis: java_object.JavaObject): java_object.JavaArray {
    rs.java_throw(<ClassData.ReferenceClassData> rs.get_bs_class('Ljava/lang/UnsatisfiedLinkError;'), 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return null;
  }

  public static 'getStartupTime()J'(rs: runtime.RuntimeState, javaThis: java_object.JavaObject): gLong {
    return rs.startup_time;
  }

  public static 'getAvailableProcessors()I'(rs: runtime.RuntimeState, javaThis: java_object.JavaObject): number {
    return 1;
  }

  public static 'getTotalCompileTime()J'(rs: runtime.RuntimeState, javaThis: java_object.JavaObject): gLong {
    rs.java_throw(<ClassData.ReferenceClassData> rs.get_bs_class('Ljava/lang/UnsatisfiedLinkError;'), 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return null;
  }

  public static 'getTotalThreadCount()J'(rs: runtime.RuntimeState, javaThis: java_object.JavaObject): gLong {
    rs.java_throw(<ClassData.ReferenceClassData> rs.get_bs_class('Ljava/lang/UnsatisfiedLinkError;'), 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return null;
  }

  public static 'getLiveThreadCount()I'(rs: runtime.RuntimeState, javaThis: java_object.JavaObject): number {
    rs.java_throw(<ClassData.ReferenceClassData> rs.get_bs_class('Ljava/lang/UnsatisfiedLinkError;'), 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return 0;
  }

  public static 'getPeakThreadCount()I'(rs: runtime.RuntimeState, javaThis: java_object.JavaObject): number {
    rs.java_throw(<ClassData.ReferenceClassData> rs.get_bs_class('Ljava/lang/UnsatisfiedLinkError;'), 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return 0;
  }

  public static 'getDaemonThreadCount()I'(rs: runtime.RuntimeState, javaThis: java_object.JavaObject): number {
    rs.java_throw(<ClassData.ReferenceClassData> rs.get_bs_class('Ljava/lang/UnsatisfiedLinkError;'), 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return 0;
  }

  public static 'getSafepointCount()J'(rs: runtime.RuntimeState, javaThis: java_object.JavaObject): gLong {
    rs.java_throw(<ClassData.ReferenceClassData> rs.get_bs_class('Ljava/lang/UnsatisfiedLinkError;'), 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return null;
  }

  public static 'getTotalSafepointTime()J'(rs: runtime.RuntimeState, javaThis: java_object.JavaObject): gLong {
    rs.java_throw(<ClassData.ReferenceClassData> rs.get_bs_class('Ljava/lang/UnsatisfiedLinkError;'), 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return null;
  }

  public static 'getSafepointSyncTime()J'(rs: runtime.RuntimeState, javaThis: java_object.JavaObject): gLong {
    rs.java_throw(<ClassData.ReferenceClassData> rs.get_bs_class('Ljava/lang/UnsatisfiedLinkError;'), 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return null;
  }

  public static 'getTotalApplicationNonStoppedTime()J'(rs: runtime.RuntimeState, javaThis: java_object.JavaObject): gLong {
    rs.java_throw(<ClassData.ReferenceClassData> rs.get_bs_class('Ljava/lang/UnsatisfiedLinkError;'), 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return null;
  }

  public static 'getLoadedClassSize()J'(rs: runtime.RuntimeState, javaThis: java_object.JavaObject): gLong {
    rs.java_throw(<ClassData.ReferenceClassData> rs.get_bs_class('Ljava/lang/UnsatisfiedLinkError;'), 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return null;
  }

  public static 'getUnloadedClassSize()J'(rs: runtime.RuntimeState, javaThis: java_object.JavaObject): gLong {
    rs.java_throw(<ClassData.ReferenceClassData> rs.get_bs_class('Ljava/lang/UnsatisfiedLinkError;'), 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return null;
  }

  public static 'getClassLoadingTime()J'(rs: runtime.RuntimeState, javaThis: java_object.JavaObject): gLong {
    rs.java_throw(<ClassData.ReferenceClassData> rs.get_bs_class('Ljava/lang/UnsatisfiedLinkError;'), 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return null;
  }

  public static 'getMethodDataSize()J'(rs: runtime.RuntimeState, javaThis: java_object.JavaObject): gLong {
    rs.java_throw(<ClassData.ReferenceClassData> rs.get_bs_class('Ljava/lang/UnsatisfiedLinkError;'), 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return null;
  }

  public static 'getInitializedClassCount()J'(rs: runtime.RuntimeState, javaThis: java_object.JavaObject): gLong {
    rs.java_throw(<ClassData.ReferenceClassData> rs.get_bs_class('Ljava/lang/UnsatisfiedLinkError;'), 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return null;
  }

  public static 'getClassInitializationTime()J'(rs: runtime.RuntimeState, javaThis: java_object.JavaObject): gLong {
    rs.java_throw(<ClassData.ReferenceClassData> rs.get_bs_class('Ljava/lang/UnsatisfiedLinkError;'), 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return null;
  }

  public static 'getClassVerificationTime()J'(rs: runtime.RuntimeState, javaThis: java_object.JavaObject): gLong {
    rs.java_throw(<ClassData.ReferenceClassData> rs.get_bs_class('Ljava/lang/UnsatisfiedLinkError;'), 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return null;
  }

}

({
  'sun/management/MemoryImpl': sun_management_MemoryImpl,
  'sun/management/VMManagementImpl': sun_management_VMManagementImpl
})
