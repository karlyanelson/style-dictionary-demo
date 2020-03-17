
//
// StyleDictionaryColor.m
//
// Do not edit directly
// Generated on Mon, 16 Mar 2020 23:36:55 GMT
//

#import "StyleDictionaryColor.h"


@implementation StyleDictionaryColor

+ (UIColor *)color:(StyleDictionaryColorName)colorEnum{
  return [[self values] objectAtIndex:colorEnum];
}

+ (NSArray *)values {
  static NSArray* colorArray;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    colorArray = @[
[UIColor colorWithRed:0.102f green:0.102f blue:0.102f alpha:1.000f],
[UIColor colorWithRed:0.184f green:0.502f blue:0.929f alpha:1.000f],
[UIColor colorWithRed:0.153f green:0.682f blue:0.376f alpha:1.000f],
[UIColor colorWithRed:0.922f green:0.341f blue:0.341f alpha:1.000f]
    ];
  });

  return colorArray;
}

@end
