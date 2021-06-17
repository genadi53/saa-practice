#include "stdafx.h"
#include <iostream>
using namespace std;
#define N 5
int a[N];
void Sort()
{
	int i, j, temp;
	for(i=N-1; i>=0; i--)
		for(j=1; j<=i; j++)
			if(a[j-1] > a[j])
			{
				temp = a[j-1];
				a[j-1] = a[j];
				a[j] = temp;
			}
}
int Sort_Search(int value)
{
	int l = 0, r = N-1, mid = 0;
	while( l <= r )
	{
		mid = ( l + r )/2;
		if( a[mid] == value )
			return mid;
		else 
		{
			if( value < a[mid] )
				r = mid - 1;
			else
				l = mid + 1;
		}
	}
	return -1;
}

int _tmain(int argc, _TCHAR* argv[])
{
	int i, n, index;
	cout << "Enter the elements of one-dimensional array\n";
	for(i=0; i<N; i++)
	{	
		cout << "arr[" << i << "] = ";
		cin >> a[i];
	}
	Sort();
	cout << "\n" << "The elements of sorted one-dimensional array\n";
	for(i=0; i<N; i++)
		cout << "arr[" << i << "] = " << a[i] << "\n";
	cout << "\n" << "Enter the element: ";
	cin >> n;
	index = Sort_Search(n);
	if(index == -1)
		cout << n << " is not element off the array\n";
	else
		cout << "The index of " << n << " is " << index << "\n";

	return 0;
}
