#include <iostream.h>
long factorial (long n);//prototype
main()
{
    long k;
    cout<<"\nВъведете цяло число:";
    cin>>k;
    cout<<"\n"<<k<<"! = "<<factorial(k);
    return 0;
}
long factorial (long n)
{
if (n>1)
    return (n*factorial(n-1));
  else
    return(1);


// factor(int n);//prototype
// main()
//  {
//    int n;
//    char c;
//    do
//    {
//      cout<<"\nВъведете цяло число: ";
//      cin>>n;
//      factor(n);
//      cout<<"\nДруга стойност (Y/N)? ";
//      cin>>c;
//    }
//    while ((c!='N')&&(c!='n'));
//    return 0;
//  }
// factor(int n)
// {
//      int rez=1;
//      for(int i=1;i<=n;i++)
// 	rez*=i;
//      cout<<"\nn!="<<rez;
//     return 0;
// }
